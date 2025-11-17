# Design Document - Restaurant Website

## Overview

Le site web du restaurant sera une application web progressive (PWA) construite avec HTML5, CSS3 et JavaScript vanilla. L'architecture privilégie la simplicité, la performance et l'accessibilité hors ligne. Le design suit une approche mobile-first avec une palette de couleurs élégante (primaire #c6a266, secondaire #000000, noir #1a1a1a, blanc #ffffff).

## Architecture

### Structure des fichiers

```
restaurant-website/
├── index.html
├── menu.html
├── reservation.html
├── contact.html
├── manifest.json
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── reservation.js
│   ├── qrcode.js
│   └── sw.js
└── assets/
    └── images/
        ├── hero.jpg
        ├── chef.jpg
        ├── logo.png
        └── menu-items/
```

### Architecture technique

Le site utilise une architecture client-side avec les composants suivants :

1. **Couche présentation** : HTML5 sémantique avec structure modulaire
2. **Couche style** : CSS3 avec variables CSS pour la cohérence du design
3. **Couche logique** : JavaScript vanilla organisé en modules fonctionnels
4. **Couche cache** : Service Worker pour la gestion PWA et l'accès hors ligne
5. **Couche stockage** : localStorage pour les réservations et préférences utilisateur

## Components and Interfaces

### 1. Navigation Component

**Responsabilité** : Menu de navigation fixe présent sur toutes les pages

**Structure HTML** :
```html
<nav class="navbar">
  <div class="nav-container">
    <a href="index.html" class="logo">Restaurant Name</a>
    <ul class="nav-menu">
      <li><a href="index.html">Home</a></li>
      <li><a href="menu.html">Menu</a></li>
      <li><a href="reservation.html">Réservation</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</nav>
```

**Comportement** :
- Position fixed avec z-index élevé
- Transformation en menu hamburger sur mobile
- Effet de transparence au scroll
- Animation smooth pour les transitions

### 2. Hero Section Component

**Responsabilité** : Section d'accueil plein écran avec image et texte d'accroche

**Structure** :
```html
<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">Bienvenue au Restaurant</h1>
    <p class="hero-subtitle">Une expérience culinaire inoubliable</p>
    <a href="reservation.html" class="btn-primary">Réserver une table</a>
  </div>
</section>
```

**Styles CSS** :
- Background image avec parallax effect
- Overlay semi-transparent pour la lisibilité
- Animations fade-in au chargement
- Responsive avec ajustement de la hauteur

### 3. Reservation System Component

**Responsabilité** : Gestion complète des réservations avec validation

**Interface JavaScript** :
```javascript
class ReservationManager {
  constructor() {
    this.reservations = this.loadReservations();
  }
  
  loadReservations() {
    // Charge depuis localStorage
  }
  
  saveReservation(reservation) {
    // Valide et sauvegarde
  }
  
  isSlotAvailable(date, time) {
    // Vérifie la disponibilité
  }
  
  validateForm(formData) {
    // Validation des champs
  }
}
```

**Validation** :
- Nom : minimum 2 caractères
- Email : regex pattern standard
- Téléphone : format français (10 chiffres)
- Date : pas de dates passées
- Nombre de personnes : 1-20
- Créneau : vérification de disponibilité

**Stockage localStorage** :
```javascript
{
  reservations: [
    {
      id: "timestamp",
      name: "string",
      email: "string",
      phone: "string",
      guests: number,
      date: "YYYY-MM-DD",
      time: "HH:MM",
      timestamp: number
    }
  ]
}
```

### 4. QR Code Generator Component

**Responsabilité** : Génération du QR Code pour accès au menu

**Implémentation** :
```javascript
class QRCodeGenerator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }
  
  generate(url) {
    // Utilise une bibliothèque légère ou Canvas API
    // Génère le QR Code pointant vers menu.html
  }
}
```

**Bibliothèque** : Utilisation de qrcode.js (lightweight, ~5KB)

**Placement** : 
- Page d'accueil : section dédiée "Scannez pour le menu"
- Page menu : bouton de téléchargement du QR

### 5. Service Worker Component

**Responsabilité** : Gestion du cache et fonctionnement hors ligne

**Stratégie de cache** :
```javascript
// Cache-first pour les assets statiques
const CACHE_NAME = 'restaurant-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/menu.html',
  '/css/style.css',
  '/js/main.js',
  '/js/qrcode.js',
  '/assets/images/logo.png'
];

// Network-first pour les pages dynamiques
// Cache-first pour les images
```

**Lifecycle** :
1. Installation : mise en cache des ressources essentielles
2. Activation : nettoyage des anciens caches
3. Fetch : stratégie selon le type de ressource

### 6. Menu Display Component

**Responsabilité** : Affichage structuré du menu

**Structure de données** :
```javascript
const menuData = {
  entrees: [
    { name: "string", description: "string", price: "string", image: "url" }
  ],
  plats: [...],
  desserts: [...],
  boissons: [...]
};
```

**Affichage** :
- Grid layout responsive
- Cards avec image, nom, description, prix
- Filtres par catégorie
- Animation au scroll

### 7. Contact Form Component

**Responsabilité** : Formulaire de contact avec validation

**Structure** :
```html
<form id="contact-form">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Envoyer</button>
</form>
```

**Validation** :
- Validation HTML5 native
- Validation JavaScript supplémentaire
- Messages d'erreur personnalisés
- Confirmation visuelle après soumission

### 8. Image Carousel Component

**Responsabilité** : Carrousel d'images sans dépendances externes

**Implémentation** :
```javascript
class Carousel {
  constructor(containerId) {
    this.currentSlide = 0;
    this.slides = [];
    this.autoPlayInterval = null;
  }
  
  next() { /* ... */ }
  prev() { /* ... */ }
  goToSlide(index) { /* ... */ }
  startAutoPlay() { /* ... */ }
  stopAutoPlay() { /* ... */ }
}
```

**Features** :
- Navigation par flèches
- Indicateurs de position
- Auto-play avec pause au hover
- Swipe sur mobile (touch events)

### 9. Modal/Popup Component

**Responsabilité** : Popup pour l'offre spéciale du jour

**Comportement** :
- Affichage au chargement de la page (délai de 1s)
- Fermeture par bouton X ou clic extérieur
- Session storage pour ne pas réafficher
- Animation fade-in/fade-out

## Data Models

### Reservation Model
```javascript
{
  id: String,              // Timestamp unique
  name: String,            // Nom du client
  email: String,           // Email valide
  phone: String,           // Format: 0123456789
  guests: Number,          // 1-20
  date: String,            // Format: YYYY-MM-DD
  time: String,            // Format: HH:MM (créneaux de 30min)
  timestamp: Number,       // Date de création
  status: String           // "confirmed" | "cancelled"
}
```

### Menu Item Model
```javascript
{
  id: String,
  category: String,        // "entrees" | "plats" | "desserts" | "boissons"
  name: String,
  description: String,
  price: String,           // Format: "XX.XX €"
  image: String,           // URL relative
  allergens: Array,        // ["gluten", "lactose", ...]
  vegetarian: Boolean,
  available: Boolean
}
```

### Contact Message Model
```javascript
{
  id: String,
  name: String,
  email: String,
  message: String,
  timestamp: Number,
  read: Boolean
}
```

## Error Handling

### Client-Side Validation Errors

**Stratégie** : Validation progressive avec feedback immédiat

1. **Champs requis** : Message sous le champ en rouge
2. **Format invalide** : Message spécifique (email, téléphone)
3. **Créneau indisponible** : Modal avec créneaux alternatifs
4. **Erreur réseau** : Toast notification avec retry

**Messages d'erreur** :
```javascript
const errorMessages = {
  required: "Ce champ est requis",
  invalidEmail: "Format d'email invalide",
  invalidPhone: "Format de téléphone invalide (10 chiffres)",
  pastDate: "La date ne peut pas être dans le passé",
  slotTaken: "Ce créneau est déjà réservé",
  minLength: "Minimum {n} caractères requis"
};
```

### Service Worker Errors

**Gestion** :
- Fallback vers le réseau si cache échoue
- Page offline personnalisée si aucune connexion
- Logging des erreurs dans console (dev mode)

### localStorage Errors

**Gestion** :
- Try-catch autour de toutes les opérations
- Vérification de la disponibilité de localStorage
- Fallback vers sessionStorage si quota dépassé
- Message utilisateur si stockage impossible

## Testing Strategy

### 1. Tests fonctionnels manuels

**Checklist de test** :
- [ ] Navigation entre toutes les pages
- [ ] Responsive sur mobile (375px), tablette (768px), desktop (1920px)
- [ ] Soumission du formulaire de réservation
- [ ] Validation des champs (cas valides et invalides)
- [ ] Génération du QR Code
- [ ] Scan du QR Code (avec appareil mobile)
- [ ] Fonctionnement hors ligne du menu
- [ ] Carrousel d'images (navigation et auto-play)
- [ ] Popup offre spéciale
- [ ] Google Maps intégré
- [ ] Animations CSS

### 2. Tests de compatibilité navigateurs

**Navigateurs cibles** :
- Chrome/Edge (dernières 2 versions)
- Firefox (dernières 2 versions)
- Safari (dernières 2 versions)
- Safari iOS (dernières 2 versions)
- Chrome Android (dernières 2 versions)

### 3. Tests de performance

**Métriques** :
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Lighthouse Score > 90
- Taille totale des assets < 2MB

**Outils** :
- Chrome DevTools Lighthouse
- PageSpeed Insights
- WebPageTest

### 4. Tests PWA

**Validation** :
- Service Worker enregistré correctement
- Manifest.json valide
- Cache fonctionnel
- Mode offline opérationnel
- Installation PWA possible

**Outils** :
- Chrome DevTools Application tab
- Lighthouse PWA audit

### 5. Tests d'accessibilité

**Critères WCAG 2.1 Level AA** :
- Contraste des couleurs suffisant
- Navigation au clavier
- Labels sur les formulaires
- Alt text sur les images
- Structure sémantique HTML

**Outils** :
- axe DevTools
- WAVE Browser Extension
- Lighthouse Accessibility audit

## Design System

### Color Palette

```css
:root {
  --primary-burgundy: #c6a266;
  --primary-gold: #000000;
  --neutral-black: #1a1a1a;
  --neutral-white: #ffffff;
  --neutral-gray: #f5f5f5;
  --text-dark: #333333;
  --text-light: #666666;
  --error-red: #dc3545;
  --success-green: #28a745;
}
```

### Typography

```css
:root {
  --font-heading: 'Lora', serif;
  --font-body: 'Poppins', sans-serif;
  
  --font-size-h1: clamp(2rem, 5vw, 3.5rem);
  --font-size-h2: clamp(1.5rem, 4vw, 2.5rem);
  --font-size-h3: clamp(1.25rem, 3vw, 2rem);
  --font-size-body: clamp(1rem, 2vw, 1.125rem);
  --font-size-small: 0.875rem;
}
```

### Spacing System

```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-xxl: 4rem;
}
```

### Breakpoints

```css
/* Mobile first approach */
/* Mobile: 320px - 767px (default) */
/* Tablet: 768px - 1023px */
@media (min-width: 768px) { }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { }

/* Large Desktop: 1440px+ */
@media (min-width: 1440px) { }
```

### Animations

```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Slide in */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

/* Pulse */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

### Button Styles

```css
.btn-primary {
  background: var(--primary-burgundy);
  color: var(--neutral-white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--primary-gold);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
```

## Implementation Notes

### Performance Optimizations

1. **Images** :
   - Format WebP avec fallback JPEG
   - Lazy loading pour images below the fold
   - Responsive images avec srcset
   - Compression optimale (quality 80-85)

2. **CSS** :
   - Minification en production
   - Critical CSS inline pour above-the-fold
   - Utilisation de CSS Grid et Flexbox (pas de frameworks)

3. **JavaScript** :
   - Minification en production
   - Defer/async pour scripts non-critiques
   - Event delegation pour les listeners
   - Debounce pour scroll/resize events

4. **Fonts** :
   - Préchargement des fonts critiques
   - font-display: swap
   - Subset des caractères si possible

### SEO Considerations

1. **Meta tags** :
   - Title unique par page
   - Meta description (150-160 caractères)
   - Open Graph tags pour réseaux sociaux
   - Canonical URLs

2. **Structure** :
   - HTML sémantique (header, nav, main, section, article, footer)
   - Heading hierarchy (h1 unique, h2-h6 structurés)
   - Schema.org markup pour restaurant

3. **Performance** :
   - Core Web Vitals optimisés
   - Mobile-friendly
   - HTTPS (requis pour PWA)

### Security Considerations

1. **Input Validation** :
   - Sanitization des inputs utilisateur
   - Protection XSS basique
   - Validation côté client ET serveur (si backend ajouté)

2. **localStorage** :
   - Pas de données sensibles
   - Expiration des données anciennes
   - Vérification de l'intégrité

3. **External Resources** :
   - Integrity checks pour CDN (si utilisés)
   - CORS approprié
   - CSP headers (si configurables)
