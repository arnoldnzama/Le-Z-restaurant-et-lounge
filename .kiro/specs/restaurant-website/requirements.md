# Requirements Document

## Introduction

Ce document définit les exigences pour un site web de restaurant moderne et professionnel, développé en HTML, CSS et JavaScript vanilla (sans frameworks). Le site permettra aux clients de consulter le menu (même hors connexion via QR Code), de réserver des créneaux horaires, et de contacter le restaurant. L'accent est mis sur une expérience utilisateur fluide, un design élégant et des fonctionnalités PWA pour l'accès hors ligne.

## Glossary

- **Restaurant Website System**: Le système web complet comprenant toutes les pages, fonctionnalités et services
- **PWA (Progressive Web App)**: Application web progressive permettant le fonctionnement hors connexion
- **Service Worker**: Script JavaScript exécuté en arrière-plan pour gérer le cache et l'accès hors ligne
- **QR Code**: Code-barres 2D permettant l'accès rapide au menu via scan
- **Reservation System**: Système de gestion des réservations avec validation des créneaux
- **localStorage**: Stockage local du navigateur pour persister les données
- **Responsive Design**: Design adaptatif fonctionnant sur mobile, tablette et desktop

## Requirements

### Requirement 1: Page d'accueil attractive

**User Story:** En tant que visiteur du site, je veux voir une page d'accueil attrayante avec les informations essentielles du restaurant, afin de découvrir l'établissement et naviguer facilement vers les autres sections.

#### Acceptance Criteria

1. THE Restaurant Website System SHALL display a full-screen hero image with the restaurant's tagline on the homepage
2. THE Restaurant Website System SHALL provide a fixed navigation menu containing links to Home, Menu, Reservation, and Contact pages
3. THE Restaurant Website System SHALL present the restaurant information including chef photo, values, and ambiance description on the homepage
4. WHEN a user hovers over navigation menu items, THE Restaurant Website System SHALL display visual feedback with CSS transitions
5. THE Restaurant Website System SHALL load the homepage within 3 seconds on standard broadband connections

### Requirement 2: Menu consultable hors connexion

**User Story:** En tant que client, je veux consulter le menu du restaurant via un QR Code même sans connexion internet, afin d'accéder aux informations culinaires à tout moment.

#### Acceptance Criteria

1. THE Restaurant Website System SHALL display the complete menu in a lightweight, optimized HTML page
2. THE Restaurant Website System SHALL generate a functional QR Code using JavaScript that links to the menu page
3. WHEN the Service Worker is registered, THE Restaurant Website System SHALL cache the menu page for offline access
4. WHEN a user scans the QR Code without internet connection, THE Restaurant Website System SHALL display the cached menu page
5. THE Restaurant Website System SHALL provide a visible button to enable offline menu access via PWA installation
6. THE Restaurant Website System SHALL organize menu items by categories (entrées, plats, desserts, boissons)

### Requirement 3: Système de réservation de créneaux

**User Story:** En tant que client, je veux réserver une table pour un créneau horaire spécifique, afin de garantir ma place au restaurant.

#### Acceptance Criteria

1. THE Restaurant Website System SHALL provide a reservation form with fields for name, phone number, email, number of guests, date, and time
2. WHEN a user submits a reservation, THE Restaurant Website System SHALL validate that all required fields are completed
3. WHEN a user selects a date and time, THE Restaurant Website System SHALL check localStorage for existing reservations at that slot
4. IF a time slot is already reserved, THEN THE Restaurant Website System SHALL display an error message and prevent double-booking
5. WHEN a reservation is successfully submitted, THE Restaurant Website System SHALL store the reservation data in localStorage
6. WHEN a reservation is successfully submitted, THE Restaurant Website System SHALL display a visual confirmation message
7. THE Restaurant Website System SHALL validate email format before accepting the reservation
8. THE Restaurant Website System SHALL validate phone number format before accepting the reservation
9. THE Restaurant Website System SHALL prevent reservations for past dates

### Requirement 4: Page de contact fonctionnelle

**User Story:** En tant que visiteur, je veux contacter le restaurant et voir son emplacement, afin de poser des questions ou trouver l'adresse facilement.

#### Acceptance Criteria

1. THE Restaurant Website System SHALL display the restaurant's physical address on the contact page
2. THE Restaurant Website System SHALL embed an interactive Google Maps showing the restaurant location
3. THE Restaurant Website System SHALL provide a contact form with fields for name, email, and message
4. WHEN a user submits the contact form, THE Restaurant Website System SHALL validate all required fields
5. WHEN the contact form is successfully submitted, THE Restaurant Website System SHALL display a confirmation message

### Requirement 5: Design moderne et responsive

**User Story:** En tant qu'utilisateur sur n'importe quel appareil, je veux une expérience visuelle élégante et adaptée à mon écran, afin de naviguer confortablement sur le site.

#### Acceptance Criteria

1. THE Restaurant Website System SHALL implement a responsive layout that adapts to mobile (320px-767px), tablet (768px-1023px), and desktop (1024px+) screen sizes
2. THE Restaurant Website System SHALL use an elegant color palette consisting of primary (#c6a266), secondary (#000000), black, and white
3. THE Restaurant Website System SHALL load Google Fonts (Lora and Poppins) for modern typography
4. WHEN a user interacts with clickable elements, THE Restaurant Website System SHALL display hover effects with smooth CSS transitions
5. THE Restaurant Website System SHALL implement fade-in animations for content sections as they enter the viewport
6. THE Restaurant Website System SHALL maintain readability with minimum font size of 16px on mobile devices
7. THE Restaurant Website System SHALL ensure touch targets are at least 44x44 pixels on mobile devices

### Requirement 6: Structure de code maintenable

**User Story:** En tant que développeur, je veux un code bien organisé et commenté, afin de maintenir et faire évoluer le site facilement.

#### Acceptance Criteria

1. THE Restaurant Website System SHALL organize files into separate directories for HTML pages, CSS stylesheets, and JavaScript files
2. THE Restaurant Website System SHALL include inline comments explaining complex logic in JavaScript files
3. THE Restaurant Website System SHALL use semantic HTML5 elements for proper document structure
4. THE Restaurant Website System SHALL separate concerns with dedicated JavaScript files (reservation.js, qrcode.js, sw.js)
5. THE Restaurant Website System SHALL use consistent naming conventions across all files (kebab-case for files, camelCase for JavaScript variables)
6. THE Restaurant Website System SHALL validate HTML and CSS against W3C standards

### Requirement 7: Fonctionnalités PWA hors connexion

**User Story:** En tant qu'utilisateur, je veux accéder au menu du restaurant même sans connexion internet, afin de consulter les plats à tout moment.

#### Acceptance Criteria

1. THE Restaurant Website System SHALL register a Service Worker on page load
2. WHEN the Service Worker is activated, THE Restaurant Website System SHALL cache essential assets (HTML, CSS, JS, images)
3. WHEN a user visits a cached page without internet connection, THE Restaurant Website System SHALL serve the cached version
4. THE Restaurant Website System SHALL include a manifest.json file for PWA installation
5. WHEN the QR Code is scanned offline, THE Restaurant Website System SHALL display the cached menu page
6. THE Restaurant Website System SHALL update the cache when new content is available and the user is online

### Requirement 8: Fonctionnalités bonus

**User Story:** En tant qu'utilisateur, je veux des fonctionnalités supplémentaires engageantes, afin d'améliorer mon expérience sur le site.

#### Acceptance Criteria

1. WHEN a user first visits the homepage, THE Restaurant Website System SHALL display a popup with the daily special offer
2. THE Restaurant Website System SHALL implement an image carousel on the homepage without external plugins
3. WHEN the page is loading, THE Restaurant Website System SHALL display a loading animation
4. WHEN the user closes the daily special popup, THE Restaurant Website System SHALL not display it again during the same session
5. THE Restaurant Website System SHALL allow users to navigate the carousel using arrow buttons and automatic rotation every 5 seconds
