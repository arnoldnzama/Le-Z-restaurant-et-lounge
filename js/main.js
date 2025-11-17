// Main JavaScript file for Restaurant Website
// This file will contain common functionality across all pages

// ===================================
// Menu Data Structure
// ===================================

const menuData = {
  entrees: [
    {
      id: 'e1',
      name: 'Foie Gras Maison',
      description: 'Foie gras de canard mi-cuit, chutney de figues et pain brioché toasté',
      price: '18.00 €',
      image: 'assets/images/menu-items/foie-gras.jpg',
      allergens: ['gluten'],
      vegetarian: false,
      available: true
    },
    {
      id: 'e2',
      name: 'Carpaccio de Saint-Jacques',
      description: 'Saint-Jacques fraîches, huile de truffe, agrumes et herbes fraîches',
      price: '16.00 €',
      image: 'assets/images/menu-items/carpaccio.jpg',
      allergens: ['crustacés'],
      vegetarian: false,
      available: true
    },
    {
      id: 'e3',
      name: 'Velouté de Champignons',
      description: 'Crème de cèpes, émulsion de noisette et croûtons maison',
      price: '12.00 €',
      image: 'assets/images/menu-items/veloute.jpg',
      allergens: ['lactose', 'fruits à coque'],
      vegetarian: true,
      available: true
    },
    {
      id: 'e4',
      name: 'Salade de Chèvre Chaud',
      description: 'Mesclun, fromage de chèvre pané, miel et noix caramélisées',
      price: '14.00 €',
      image: 'assets/images/menu-items/chevre.jpg',
      allergens: ['lactose', 'fruits à coque', 'gluten'],
      vegetarian: true,
      available: true
    }
  ],
  plats: [
    {
      id: 'p1',
      name: 'Magret de Canard',
      description: 'Magret rôti, sauce aux fruits rouges, gratin dauphinois et légumes de saison',
      price: '28.00 €',
      image: 'assets/images/menu-items/magret.jpg',
      allergens: ['lactose'],
      vegetarian: false,
      available: true
    },
    {
      id: 'p2',
      name: 'Filet de Bœuf Rossini',
      description: 'Filet de bœuf, foie gras poêlé, sauce Périgueux et pommes grenailles',
      price: '35.00 €',
      image: 'assets/images/menu-items/boeuf.jpg',
      allergens: [],
      vegetarian: false,
      available: true
    },
    {
      id: 'p3',
      name: 'Bar de Ligne',
      description: 'Bar sauvage, beurre blanc, risotto crémeux et asperges vertes',
      price: '32.00 €',
      image: 'assets/images/menu-items/bar.jpg',
      allergens: ['poisson', 'lactose'],
      vegetarian: false,
      available: true
    },
    {
      id: 'p4',
      name: 'Risotto aux Truffes',
      description: 'Risotto crémeux, copeaux de truffe noire, parmesan et huile de truffe',
      price: '26.00 €',
      image: 'assets/images/menu-items/risotto.jpg',
      allergens: ['lactose'],
      vegetarian: true,
      available: true
    },
    {
      id: 'p5',
      name: 'Homard Breton',
      description: 'Demi-homard grillé, beurre à l\'estragon, légumes croquants',
      price: '42.00 €',
      image: 'assets/images/menu-items/homard.jpg',
      allergens: ['crustacés', 'lactose'],
      vegetarian: false,
      available: true
    }
  ],
  desserts: [
    {
      id: 'd1',
      name: 'Tarte Tatin',
      description: 'Tarte aux pommes caramélisées, glace vanille bourbon',
      price: '10.00 €',
      image: 'assets/images/menu-items/tatin.jpg',
      allergens: ['gluten', 'lactose', 'œufs'],
      vegetarian: true,
      available: true
    },
    {
      id: 'd2',
      name: 'Fondant au Chocolat',
      description: 'Cœur coulant au chocolat Valrhona, glace pistache',
      price: '11.00 €',
      image: 'assets/images/menu-items/fondant.jpg',
      allergens: ['gluten', 'lactose', 'œufs', 'fruits à coque'],
      vegetarian: true,
      available: true
    },
    {
      id: 'd3',
      name: 'Crème Brûlée',
      description: 'Crème brûlée à la vanille de Madagascar, sablé breton',
      price: '9.00 €',
      image: 'assets/images/menu-items/brulee.jpg',
      allergens: ['lactose', 'œufs', 'gluten'],
      vegetarian: true,
      available: true
    },
    {
      id: 'd4',
      name: 'Millefeuille',
      description: 'Millefeuille traditionnel, crème pâtissière vanille et caramel',
      price: '10.00 €',
      image: 'assets/images/menu-items/millefeuille.jpg',
      allergens: ['gluten', 'lactose', 'œufs'],
      vegetarian: true,
      available: true
    }
  ],
  boissons: [
    {
      id: 'b1',
      name: 'Château Margaux 2015',
      description: 'Grand cru classé, Bordeaux rouge',
      price: '180.00 €',
      image: 'assets/images/menu-items/vin-rouge.jpg',
      allergens: ['sulfites'],
      vegetarian: true,
      available: true
    },
    {
      id: 'b2',
      name: 'Chablis Grand Cru',
      description: 'Vin blanc sec, Bourgogne',
      price: '85.00 €',
      image: 'assets/images/menu-items/vin-blanc.jpg',
      allergens: ['sulfites'],
      vegetarian: true,
      available: true
    },
    {
      id: 'b3',
      name: 'Champagne Brut',
      description: 'Champagne Moët & Chandon',
      price: '120.00 €',
      image: 'assets/images/menu-items/champagne.jpg',
      allergens: ['sulfites'],
      vegetarian: true,
      available: true
    },
    {
      id: 'b4',
      name: 'Eau Minérale',
      description: 'Eau plate ou gazeuse (75cl)',
      price: '6.00 €',
      image: 'assets/images/menu-items/eau.jpg',
      allergens: [],
      vegetarian: true,
      available: true
    },
    {
      id: 'b5',
      name: 'Café Gourmand',
      description: 'Expresso accompagné de mignardises',
      price: '8.00 €',
      image: 'assets/images/menu-items/cafe.jpg',
      allergens: ['gluten', 'lactose', 'œufs'],
      vegetarian: true,
      available: true
    },
    {
      id: 'b6',
      name: 'Thé Premium',
      description: 'Sélection de thés fins (Earl Grey, Darjeeling, Jasmin)',
      price: '5.00 €',
      image: 'assets/images/menu-items/the.jpg',
      allergens: [],
      vegetarian: true,
      available: true
    }
  ]
};

// ===================================
// Menu Display Functions
// ===================================

function displayMenu() {
  // Display each category
  displayMenuCategory('entrees', menuData.entrees);
  displayMenuCategory('plats', menuData.plats);
  displayMenuCategory('desserts', menuData.desserts);
  displayMenuCategory('boissons', menuData.boissons);
}

function displayMenuCategory(category, items) {
  const gridElement = document.getElementById(`${category}-grid`);
  
  if (!gridElement) return;
  
  // Clear existing content
  gridElement.innerHTML = '';
  
  // Create menu cards for each item
  items.forEach(item => {
    if (item.available) {
      const card = createMenuCard(item);
      gridElement.appendChild(card);
    }
  });
  
  // Re-initialize scroll animations for newly added cards
  initScrollAnimations();
}

function createMenuCard(item) {
  const card = document.createElement('div');
  card.className = 'menu-card fade-up-scroll';
  
  // Create card HTML
  card.innerHTML = `
    <div class="menu-card-image">
      <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
      ${item.vegetarian ? '<span class="menu-badge vegetarian">Végétarien</span>' : ''}
    </div>
    <div class="menu-card-content">
      <h3 class="menu-card-title">${item.name}</h3>
      <p class="menu-card-description">${item.description}</p>
      ${item.allergens.length > 0 ? `<p class="menu-card-allergens"><small>Allergènes: ${item.allergens.join(', ')}</small></p>` : ''}
      <div class="menu-card-footer">
        <span class="menu-card-price">${item.price}</span>
      </div>
    </div>
  `;
  
  return card;
}

// ===================================
// Page Loader
// ===================================

function initPageLoader() {
  // Create loader element
  const loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.className = 'page-loader';
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loading-spinner"></div>
      <p>Chargement...</p>
    </div>
  `;
  
  // Add to body
  document.body.insertBefore(loader, document.body.firstChild);
  
  // Hide loader when page is fully loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 300); // Small delay for smooth transition
  });
}

// Initialize loader immediately
if (document.readyState === 'loading') {
  initPageLoader();
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize menu display if on menu page
  if (document.getElementById('entrees-grid')) {
    displayMenu();
  }
  // Mobile menu toggle with touch optimization
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger) {
    // Use touchstart for faster response on mobile, with click as fallback
    const toggleMenu = function(e) {
      e.preventDefault();
      const isActive = hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Update ARIA attributes for accessibility
      hamburger.setAttribute('aria-expanded', isActive);
      hamburger.setAttribute('aria-label', isActive ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation');
      
      // Prevent body scroll when menu is open
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };
    
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('active') && 
          !navMenu.contains(e.target) && 
          !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Ouvrir le menu de navigation');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (hamburger) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Ouvrir le menu de navigation');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Initialize carousel if it exists on the page
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    initCarousel();
  }
  
  // Initialize special offer popup if on homepage
  const popup = document.getElementById('special-offer-popup');
  if (popup) {
    initSpecialOfferPopup();
  }
  
  // Initialize scroll animations
  initScrollAnimations();
});

// ===================================
// Carousel Component
// ===================================

function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const container = carousel.querySelector('.carousel-container');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  const indicatorsContainer = carousel.querySelector('.carousel-indicators');
  
  let currentSlide = 0;
  let autoPlayInterval = null;
  let touchStartX = 0;
  let touchEndX = 0;
  
  // Create indicators
  slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });
  
  const indicators = carousel.querySelectorAll('.carousel-indicator');
  
  // Navigation functions
  function goToSlide(index) {
    currentSlide = index;
    const offset = -currentSlide * 100;
    container.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === currentSlide);
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
  }
  
  // Auto-play functionality
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
  }
  
  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }
  
  // Event listeners for buttons
  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay(); // Restart auto-play after manual navigation
  });
  
  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay(); // Restart auto-play after manual navigation
  });
  
  // Touch support for mobile with improved handling
  let touchStartTime = 0;
  
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartTime = Date.now();
    stopAutoPlay(); // Stop auto-play when user starts touching
  }, { passive: true });
  
  carousel.addEventListener('touchmove', (e) => {
    // Prevent default only for horizontal swipes to allow vertical scrolling
    const touchCurrentX = e.changedTouches[0].screenX;
    const diff = Math.abs(touchStartX - touchCurrentX);
    if (diff > 10) {
      e.preventDefault();
    }
  }, { passive: false });
  
  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const touchDuration = Date.now() - touchStartTime;
    handleSwipe(touchDuration);
    startAutoPlay(); // Restart auto-play after touch ends
  }, { passive: true });
  
  function handleSwipe(duration) {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    const maxSwipeDuration = 500; // Maximum duration for a valid swipe (ms)
    
    // Only register as swipe if it's fast enough and long enough
    if (Math.abs(diff) > swipeThreshold && duration < maxSwipeDuration) {
      if (diff > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide
        prevSlide();
      }
    }
  }
  
  // Pause auto-play on hover (desktop)
  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);
  
  // Start auto-play
  startAutoPlay();
}

// ===================================
// Special Offer Popup Component
// ===================================

function initSpecialOfferPopup() {
  const popup = document.getElementById('special-offer-popup');
  const closeBtn = popup.querySelector('.close');
  
  // Check if popup was already shown in this session
  const popupShown = sessionStorage.getItem('specialOfferShown');
  
  if (!popupShown) {
    // Show popup after 1 second delay
    setTimeout(() => {
      popup.style.display = 'flex';
      popup.classList.add('show');
      // Focus trap: focus the close button when modal opens
      closeBtn.focus();
    }, 1000);
  }
  
  // Close popup when clicking X
  closeBtn.addEventListener('click', () => {
    closePopup();
  });
  
  // Close popup when clicking outside the modal content
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      closePopup();
    }
  });
  
  // Close popup with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('show')) {
      closePopup();
    }
  });
  
  function closePopup() {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.style.display = 'none';
    }, 300);
    // Mark popup as shown in session storage
    sessionStorage.setItem('specialOfferShown', 'true');
  }
}


// ===================================
// Scroll Animations with Intersection Observer
// ===================================

function initScrollAnimations() {
  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all elements immediately
    document.querySelectorAll('.fade-in-scroll, .fade-up-scroll, .fade-down-scroll, .fade-left-scroll, .fade-right-scroll, .zoom-in-scroll').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }
  
  // Create intersection observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of element is visible
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to trigger animation
        entry.target.classList.add('visible');
        // Optional: stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.fade-in-scroll, .fade-up-scroll, .fade-down-scroll, .fade-left-scroll, .fade-right-scroll, .zoom-in-scroll, .animate-on-scroll'
  );
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// ===================================
// Service Worker Registration
// ===================================

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration.scope);
        
        // Check for updates periodically
        setInterval(() => {
          registration.update();
        }, 60000); // Check every minute
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}


// ===================================
// Navbar Scroll Effect
// ===================================

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolling down
    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbarScroll);
} else {
  initNavbarScroll();
}

// ===================================
// Parallax Effect for Hero Section
// ===================================

function initParallax() {
  const hero = document.querySelector('.hero');
  
  if (!hero) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    // Apply parallax effect
    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
  });
}

// Initialize parallax
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParallax);
} else {
  initParallax();
}

// ===================================
// Counter Animation for Stats
// ===================================

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = formatStatNumber(target);
      clearInterval(timer);
    } else {
      element.textContent = formatStatNumber(Math.floor(current));
    }
  }, 16);
}

function formatStatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K+';
  }
  return num + '+';
}

function initStatsAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        const text = entry.target.textContent;
        const number = parseInt(text.replace(/[^0-9]/g, ''));
        
        if (!isNaN(number)) {
          entry.target.textContent = '0';
          animateCounter(entry.target, number);
        }
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => observer.observe(stat));
}

// Initialize stats animation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStatsAnimation);
} else {
  initStatsAnimation();
}

// ===================================
// Gallery Lightbox Effect
// ===================================

function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (galleryItems.length === 0) return;
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      const title = this.querySelector('.gallery-overlay h3')?.textContent || '';
      
      // Create lightbox
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Fermer">&times;</button>
          <img src="${img.src}" alt="${img.alt}">
          ${title ? `<h3>${title}</h3>` : ''}
        </div>
      `;
      
      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';
      
      // Animate in
      setTimeout(() => lightbox.classList.add('active'), 10);
      
      // Close handlers
      const closeBtn = lightbox.querySelector('.lightbox-close');
      closeBtn.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
      });
      
      document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
          closeLightbox();
          document.removeEventListener('keydown', escHandler);
        }
      });
      
      function closeLightbox() {
        lightbox.classList.remove('active');
        setTimeout(() => {
          lightbox.remove();
          document.body.style.overflow = '';
        }, 300);
      }
    });
  });
}

// Initialize gallery lightbox
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGalleryLightbox);
} else {
  initGalleryLightbox();
}

// ===================================
// Smooth Reveal on Scroll (Enhanced)
// ===================================

function initEnhancedScrollReveal() {
  const revealElements = document.querySelectorAll('.fade-up-scroll, .fade-left-scroll, .fade-right-scroll, .fade-in-scroll, .zoom-in-scroll');
  
  if (revealElements.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.15
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  revealElements.forEach(el => observer.observe(el));
}

// Initialize enhanced scroll reveal
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEnhancedScrollReveal);
} else {
  initEnhancedScrollReveal();
}


// ===================================
// Newsletter Form Handler
// ===================================

function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!email) return;
    
    // Simulate API call
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Envoi...';
    button.disabled = true;
    
    setTimeout(() => {
      // Show success message
      showNotification('Merci ! Vous êtes inscrit à notre newsletter.', 'success');
      emailInput.value = '';
      button.textContent = originalText;
      button.disabled = false;
      
      // Store in localStorage (for demo purposes)
      localStorage.setItem('newsletter_subscribed', 'true');
    }, 1500);
  });
}

// Initialize newsletter form
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNewsletterForm);
} else {
  initNewsletterForm();
}

// ===================================
// Notification System
// ===================================

function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
      <span class="notification-message">${message}</span>
      <button class="notification-close" aria-label="Fermer">&times;</button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Close button handler
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => closeNotification(notification));
  
  // Auto close after 5 seconds
  setTimeout(() => closeNotification(notification), 5000);
}

function closeNotification(notification) {
  notification.classList.remove('show');
  setTimeout(() => notification.remove(), 300);
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize smooth scroll
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSmoothScroll);
} else {
  initSmoothScroll();
}

// ===================================
// Back to Top Button
// ===================================

function initBackToTop() {
  // Create back to top button
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = '↑';
  backToTop.setAttribute('aria-label', 'Retour en haut');
  backToTop.style.display = 'none';
  
  document.body.appendChild(backToTop);
  
  // Show/hide on scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTop.style.display = 'flex';
      setTimeout(() => backToTop.classList.add('show'), 10);
    } else {
      backToTop.classList.remove('show');
      setTimeout(() => {
        if (!backToTop.classList.contains('show')) {
          backToTop.style.display = 'none';
        }
      }, 300);
    }
  });
  
  // Scroll to top on click
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize back to top
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackToTop);
} else {
  initBackToTop();
}

// ===================================
// Image Lazy Loading Fallback
// ===================================

function initLazyLoadingFallback() {
  // Check if browser supports native lazy loading
  if ('loading' in HTMLImageElement.prototype) {
    return; // Native lazy loading is supported
  }
  
  // Fallback for older browsers
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading fallback
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLazyLoadingFallback);
} else {
  initLazyLoadingFallback();
}
