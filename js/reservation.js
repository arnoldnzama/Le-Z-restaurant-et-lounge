// Reservation System JavaScript
// Manages reservation form validation, slot availability, and localStorage persistence

class ReservationManager {
  constructor() {
    this.reservations = this.loadReservations();
    this.errorMessages = {
      required: "Ce champ est requis",
      invalidEmail: "Format d'email invalide",
      invalidPhone: "Format de téléphone invalide (10 chiffres)",
      pastDate: "La date ne peut pas être dans le passé",
      slotTaken: "Ce créneau est déjà réservé",
      minLength: "Minimum 2 caractères requis",
      invalidGuests: "Veuillez sélectionner le nombre de personnes"
    };
  }

  /**
   * Load reservations from localStorage
   * @returns {Array} Array of reservation objects
   */
  loadReservations() {
    try {
      const stored = localStorage.getItem('reservations');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading reservations:', error);
      return [];
    }
  }

  /**
   * Save a new reservation to localStorage
   * @param {Object} reservation - Reservation data
   * @returns {boolean} Success status
   */
  saveReservation(reservation) {
    try {
      // Add unique ID and timestamp
      reservation.id = Date.now().toString();
      reservation.timestamp = Date.now();
      reservation.status = 'confirmed';

      // Add to reservations array
      this.reservations.push(reservation);

      // Save to localStorage
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
      return true;
    } catch (error) {
      console.error('Error saving reservation:', error);
      return false;
    }
  }

  /**
   * Check if a time slot is available
   * @param {string} date - Date in YYYY-MM-DD format
   * @param {string} time - Time in HH:MM format
   * @returns {boolean} True if slot is available
   */
  isSlotAvailable(date, time) {
    return !this.reservations.some(reservation => 
      reservation.date === date && 
      reservation.time === time &&
      reservation.status === 'confirmed'
    );
  }

  /**
   * Validate form data
   * @param {Object} formData - Form data to validate
   * @returns {Object} Validation result with isValid flag and errors object
   */
  validateForm(formData) {
    const errors = {};
    let isValid = true;

    // Validate name (minimum 2 characters)
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = formData.name ? this.errorMessages.minLength : this.errorMessages.required;
      isValid = false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = this.errorMessages.required;
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = this.errorMessages.invalidEmail;
      isValid = false;
    }

    // Validate phone (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      errors.phone = this.errorMessages.required;
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = this.errorMessages.invalidPhone;
      isValid = false;
    }

    // Validate guests
    if (!formData.guests || formData.guests === '') {
      errors.guests = this.errorMessages.invalidGuests;
      isValid = false;
    }

    // Validate date (not in the past)
    if (!formData.date) {
      errors.date = this.errorMessages.required;
      isValid = false;
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        errors.date = this.errorMessages.pastDate;
        isValid = false;
      }
    }

    // Validate time
    if (!formData.time) {
      errors.time = this.errorMessages.required;
      isValid = false;
    }

    // Check slot availability
    if (formData.date && formData.time && !this.isSlotAvailable(formData.date, formData.time)) {
      errors.time = this.errorMessages.slotTaken;
      isValid = false;
    }

    return { isValid, errors };
  }
}


// Initialize reservation system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const reservationManager = new ReservationManager();
  const form = document.getElementById('reservation-form');
  const confirmationMessage = document.getElementById('confirmation-message');
  const newReservationBtn = document.getElementById('new-reservation');

  // Set minimum date to today
  const dateInput = document.getElementById('date');
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);

  // Initialize time slots
  initializeTimeSlots();

  // Real-time validation for each field
  const fields = ['name', 'email', 'phone', 'guests', 'date', 'time'];
  
  fields.forEach(fieldName => {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}-error`);

    if (fieldName === 'time') {
      // Time field is handled by time slots
      return;
    }

    field.addEventListener('blur', () => {
      validateField(fieldName, field.value, errorElement);
    });

    field.addEventListener('input', () => {
      // Clear error on input
      if (errorElement.style.display !== 'none') {
        errorElement.style.display = 'none';
        field.classList.remove('error');
      }
    });
  });

  /**
   * Validate individual field
   */
  function validateField(fieldName, value, errorElement) {
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      guests: document.getElementById('guests').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value
    };

    const validation = reservationManager.validateForm(formData);
    
    if (validation.errors[fieldName]) {
      showError(fieldName, validation.errors[fieldName]);
    }
  }

  /**
   * Show error message for a field
   */
  function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    field.classList.add('error');
    
    // If time slot is taken, show available alternatives
    if (fieldName === 'time' && message === reservationManager.errorMessages.slotTaken) {
      showAvailableSlots();
    }
  }
  
  /**
   * Show available time slots for the selected date
   */
  function showAvailableSlots() {
    const dateValue = document.getElementById('date').value;
    const timeSelect = document.getElementById('time');
    const errorElement = document.getElementById('time-error');
    
    if (!dateValue) return;
    
    // Get all time options
    const timeOptions = Array.from(timeSelect.options).filter(opt => opt.value !== '');
    
    // Find available slots
    const availableSlots = timeOptions
      .filter(opt => reservationManager.isSlotAvailable(dateValue, opt.value))
      .map(opt => opt.value);
    
    if (availableSlots.length > 0) {
      const slotsText = availableSlots.join(', ');
      errorElement.innerHTML = `${reservationManager.errorMessages.slotTaken}<br><small style="color: var(--success-green); margin-top: 0.25rem; display: block;">Créneaux disponibles: ${slotsText}</small>`;
    }
  }

  /**
   * Clear all error messages
   */
  function clearErrors() {
    fields.forEach(fieldName => {
      const field = document.getElementById(fieldName);
      const errorElement = document.getElementById(`${fieldName}-error`);
      
      errorElement.style.display = 'none';
      field.classList.remove('error');
    });
  }

  /**
   * Handle form submission
   */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    // Collect form data
    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      guests: document.getElementById('guests').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      message: document.getElementById('message').value.trim()
    };

    // Validate form
    const validation = reservationManager.validateForm(formData);

    if (!validation.isValid) {
      // Show all errors
      Object.keys(validation.errors).forEach(fieldName => {
        showError(fieldName, validation.errors[fieldName]);
      });
      
      // Scroll to first error
      const firstError = document.querySelector('.form-control.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Save reservation
    const saved = reservationManager.saveReservation(formData);

    if (saved) {
      // Display reservation details in confirmation
      displayReservationDetails(formData);
      
      // Show confirmation message
      form.style.display = 'none';
      confirmationMessage.style.display = 'block';
      
      // Scroll to confirmation
      confirmationMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      alert('Une erreur est survenue lors de la sauvegarde de votre réservation. Veuillez réessayer.');
    }
  });

  /**
   * Display reservation details in confirmation message
   */
  function displayReservationDetails(formData) {
    const detailsContainer = document.getElementById('reservation-details');
    
    // Format date for display
    const dateObj = new Date(formData.date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('fr-FR', options);
    
    // Format guest count
    const guestText = formData.guests === '1' ? '1 personne' : `${formData.guests} personnes`;
    
    // Build details HTML
    detailsContainer.innerHTML = `
      <p style="margin-bottom: 0.75rem;"><strong style="color: var(--primary-burgundy);">Nom:</strong> ${formData.name}</p>
      <p style="margin-bottom: 0.75rem;"><strong style="color: var(--primary-burgundy);">Date:</strong> ${formattedDate}</p>
      <p style="margin-bottom: 0.75rem;"><strong style="color: var(--primary-burgundy);">Heure:</strong> ${formData.time}</p>
      <p style="margin-bottom: 0.75rem;"><strong style="color: var(--primary-burgundy);">Nombre de personnes:</strong> ${guestText}</p>
      <p style="margin-bottom: 0.75rem;"><strong style="color: var(--primary-burgundy);">Email:</strong> ${formData.email}</p>
      <p style="margin-bottom: 0;"><strong style="color: var(--primary-burgundy);">Téléphone:</strong> ${formData.phone}</p>
    `;
  }

  /**
   * Handle new reservation button
   */
  newReservationBtn.addEventListener('click', () => {
    // Reset form
    form.reset();
    clearErrors();
    
    // Reset time slots
    document.querySelectorAll('.time-slot').forEach(slot => {
      slot.classList.remove('selected');
    });
    document.getElementById('time').value = '';
    
    // Show form, hide confirmation
    form.style.display = 'block';
    confirmationMessage.style.display = 'none';
    
    // Scroll to form
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /**
   * Initialize time slots functionality
   */
  function initializeTimeSlots() {
    const timeSlots = document.querySelectorAll('.time-slot');
    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const timeError = document.getElementById('time-error');

    // Handle time slot click
    timeSlots.forEach(slot => {
      slot.addEventListener('click', function() {
        // Don't allow selection if unavailable
        if (this.classList.contains('unavailable')) {
          return;
        }

        // Remove selected class from all slots
        timeSlots.forEach(s => s.classList.remove('selected'));
        
        // Add selected class to clicked slot
        this.classList.add('selected');
        
        // Update hidden input
        const selectedTime = this.getAttribute('data-time');
        timeInput.value = selectedTime;
        
        // Clear error if exists
        if (timeError.style.display !== 'none') {
          timeError.style.display = 'none';
        }

        // Highlight the time period
        const timePeriod = this.closest('.time-period');
        document.querySelectorAll('.time-period').forEach(p => {
          p.classList.remove('has-selection');
        });
        timePeriod.classList.add('has-selection');
      });
    });

    // Update available slots when date changes
    dateInput.addEventListener('change', function() {
      updateAvailableSlots(this.value);
    });
  }

  /**
   * Update available time slots based on selected date
   */
  function updateAvailableSlots(selectedDate) {
    if (!selectedDate) return;

    const timeSlots = document.querySelectorAll('.time-slot');
    
    timeSlots.forEach(slot => {
      const time = slot.getAttribute('data-time');
      const isAvailable = reservationManager.isSlotAvailable(selectedDate, time);
      
      if (isAvailable) {
        slot.classList.remove('unavailable');
      } else {
        slot.classList.add('unavailable');
        slot.classList.remove('selected');
        
        // If this was the selected slot, clear the selection
        if (document.getElementById('time').value === time) {
          document.getElementById('time').value = '';
        }
      }
    });
  }
});
