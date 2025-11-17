/**
 * Contact Form Manager
 * Handles validation and submission of the contact form
 */

class ContactFormManager {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.confirmationMessage = document.getElementById('contact-confirmation');
    this.newMessageBtn = document.getElementById('new-message');
    
    // Form fields
    this.nameField = document.getElementById('contact-name');
    this.emailField = document.getElementById('contact-email');
    this.messageField = document.getElementById('contact-message');
    
    // Error message elements
    this.nameError = document.getElementById('contact-name-error');
    this.emailError = document.getElementById('contact-email-error');
    this.messageError = document.getElementById('contact-message-error');
    
    // Error messages
    this.errorMessages = {
      required: 'Ce champ est requis',
      invalidEmail: 'Format d\'email invalide',
      minLength: 'Minimum {min} caractères requis',
      maxLength: 'Maximum {max} caractères autorisés'
    };
    
    this.init();
  }
  
  init() {
    if (!this.form) return;
    
    // Form submission
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation
    this.nameField.addEventListener('blur', () => this.validateName());
    this.emailField.addEventListener('blur', () => this.validateEmail());
    this.messageField.addEventListener('blur', () => this.validateMessage());
    
    // Clear error on input
    this.nameField.addEventListener('input', () => this.clearError(this.nameField, this.nameError));
    this.emailField.addEventListener('input', () => this.clearError(this.emailField, this.emailError));
    this.messageField.addEventListener('input', () => this.clearError(this.messageField, this.messageError));
    
    // New message button
    if (this.newMessageBtn) {
      this.newMessageBtn.addEventListener('click', () => this.resetForm());
    }
  }
  
  /**
   * Handle form submission
   */
  handleSubmit(e) {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = this.validateName();
    const isEmailValid = this.validateEmail();
    const isMessageValid = this.validateMessage();
    
    if (isNameValid && isEmailValid && isMessageValid) {
      this.submitForm();
    } else {
      // Focus on first invalid field
      if (!isNameValid) {
        this.nameField.focus();
      } else if (!isEmailValid) {
        this.emailField.focus();
      } else if (!isMessageValid) {
        this.messageField.focus();
      }
    }
  }
  
  /**
   * Validate name field
   */
  validateName() {
    const name = this.nameField.value.trim();
    
    if (name === '') {
      this.showError(this.nameField, this.nameError, this.errorMessages.required);
      return false;
    }
    
    if (name.length < 2) {
      this.showError(this.nameField, this.nameError, this.errorMessages.minLength.replace('{min}', '2'));
      return false;
    }
    
    if (name.length > 100) {
      this.showError(this.nameField, this.nameError, this.errorMessages.maxLength.replace('{max}', '100'));
      return false;
    }
    
    this.clearError(this.nameField, this.nameError);
    this.nameField.classList.add('valid');
    return true;
  }
  
  /**
   * Validate email field
   */
  validateEmail() {
    const email = this.emailField.value.trim();
    
    if (email === '') {
      this.showError(this.emailField, this.emailError, this.errorMessages.required);
      return false;
    }
    
    // Email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      this.showError(this.emailField, this.emailError, this.errorMessages.invalidEmail);
      return false;
    }
    
    this.clearError(this.emailField, this.emailError);
    this.emailField.classList.add('valid');
    return true;
  }
  
  /**
   * Validate message field
   */
  validateMessage() {
    const message = this.messageField.value.trim();
    
    if (message === '') {
      this.showError(this.messageField, this.messageError, this.errorMessages.required);
      return false;
    }
    
    if (message.length < 10) {
      this.showError(this.messageField, this.messageError, this.errorMessages.minLength.replace('{min}', '10'));
      return false;
    }
    
    if (message.length > 1000) {
      this.showError(this.messageField, this.messageError, this.errorMessages.maxLength.replace('{max}', '1000'));
      return false;
    }
    
    this.clearError(this.messageField, this.messageError);
    this.messageField.classList.add('valid');
    return true;
  }
  
  /**
   * Show error message
   */
  showError(field, errorElement, message) {
    field.classList.add('invalid');
    field.classList.remove('valid');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  /**
   * Clear error message
   */
  clearError(field, errorElement) {
    field.classList.remove('invalid');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }
  
  /**
   * Submit the form
   */
  submitForm() {
    // Get form data
    const formData = {
      id: Date.now().toString(),
      name: this.nameField.value.trim(),
      email: this.emailField.value.trim(),
      message: this.messageField.value.trim(),
      timestamp: Date.now(),
      read: false
    };
    
    // Save to localStorage (in a real app, this would be sent to a server)
    this.saveMessage(formData);
    
    // Show confirmation message
    this.showConfirmation();
  }
  
  /**
   * Save message to localStorage
   */
  saveMessage(message) {
    try {
      // Get existing messages
      let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      
      // Add new message
      messages.push(message);
      
      // Save back to localStorage
      localStorage.setItem('contactMessages', JSON.stringify(messages));
      
      console.log('Message saved successfully:', message);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  }
  
  /**
   * Show confirmation message
   */
  showConfirmation() {
    // Hide form
    this.form.style.display = 'none';
    
    // Show confirmation
    this.confirmationMessage.style.display = 'block';
    
    // Scroll to confirmation
    this.confirmationMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  /**
   * Reset form for new message
   */
  resetForm() {
    // Reset form fields
    this.form.reset();
    
    // Clear all validation states
    this.nameField.classList.remove('valid', 'invalid');
    this.emailField.classList.remove('valid', 'invalid');
    this.messageField.classList.remove('valid', 'invalid');
    
    // Clear all error messages
    this.clearError(this.nameField, this.nameError);
    this.clearError(this.emailField, this.emailError);
    this.clearError(this.messageField, this.messageError);
    
    // Show form and hide confirmation
    this.form.style.display = 'block';
    this.confirmationMessage.style.display = 'none';
    
    // Scroll to form
    this.form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Focus on first field
    this.nameField.focus();
  }
}

// Initialize contact form manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ContactFormManager();
});
