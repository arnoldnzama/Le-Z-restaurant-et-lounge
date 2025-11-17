# 🍽️ Le Z Restaurant & Lounge

Site web moderne et élégant pour un restaurant gastronomique à Kinshasa, République Démocratique du Congo.

![Version](https://img.shields.io/badge/version-2.0.0-gold)
![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Fonctionnalités

### 🎨 Design Moderne
- Interface élégante inspirée des meilleurs templates Wix
- Palette de couleurs sophistiquée (or, cuivre, noir)
- Dégradés et effets visuels avancés
- Animations fluides et naturelles

### 📱 Responsive
- Parfaitement adapté à tous les écrans
- Mobile-first approach
- Touch-friendly sur tablettes et smartphones
- Menu hamburger optimisé

### 🖼️ Galerie Interactive
- Lightbox plein écran
- Effet hover élégant
- Navigation intuitive
- Lazy loading des images

### 📊 Statistiques Animées
- Compteurs qui s'incrémentent au scroll
- 15+ années d'excellence
- 50K+ clients satisfaits
- 200+ plats signature
- Note moyenne 5★

### 💬 Témoignages Clients
- Design moderne avec glassmorphism
- Système de notation par étoiles
- Effet hover avec élévation

### 🎉 Section Événements
- Soirée Jazz Live (vendredis)
- Horaires détaillés
- Design avec badges et cartes

### 📧 Newsletter
- Formulaire d'inscription intégré
- Validation en temps réel
- Notifications de succès

### 🔔 Système de Notifications
- Toast notifications modernes
- Types : Success, Error, Info
- Auto-fermeture après 5 secondes

### ♿ Accessibilité
- Navigation au clavier complète
- ARIA labels appropriés
- Support du mode contraste élevé
- Support du mode mouvement réduit
- WCAG 2.1 Level AA

### ⚡ Performance
- Lazy loading des images
- GPU acceleration
- Service Worker pour PWA
- Optimisé pour mobile

## 🚀 Démarrage Rapide

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/restaurant.git
cd restaurant
```

2. **Ouvrir dans un navigateur**
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx serve

# Ou simplement ouvrir index.html dans votre navigateur
```

3. **Accéder au site**
```
http://localhost:8000
```

### Structure du Projet

```
restaurant/
├── index.html              # Page d'accueil
├── menu.html              # Page menu
├── reservation.html       # Page réservation
├── contact.html          # Page contact
├── demo.html             # Page de démonstration
├── css/
│   └── style.css         # Styles principaux
├── js/
│   ├── main.js          # JavaScript principal
│   ├── qrcode.js        # Générateur QR Code
│   ├── reservation.js   # Logique réservation
│   └── contact.js       # Logique contact
├── assets/
│   └── images/          # Images et icons
├── manifest.json        # Manifest PWA
├── sw.js               # Service Worker
└── docs/               # Documentation
    ├── AMELIORATIONS.md
    ├── GUIDE_UTILISATION.md
    ├── DEPLOIEMENT.md
    └── CHANGELOG.md
```

## 📖 Documentation

- **[Guide d'Utilisation](GUIDE_UTILISATION.md)** - Comment utiliser toutes les fonctionnalités
- **[Améliorations](AMELIORATIONS.md)** - Documentation technique des améliorations
- **[Déploiement](DEPLOIEMENT.md)** - Guide de déploiement complet
- **[Changelog](CHANGELOG.md)** - Historique des versions
- **[Résumé](RESUME_MODIFICATIONS.md)** - Résumé des modifications

## 🎯 Pages

### 🏠 Accueil (index.html)
- Hero avec effet parallax
- Section présentation
- Statistiques animées
- Split content
- Galerie photos
- Témoignages
- Événements
- QR Code menu

### 📋 Menu (menu.html)
- Entrées
- Plats principaux
- Desserts
- Boissons
- QR Code téléchargeable
- Accès hors ligne (PWA)

### 📅 Réservation (reservation.html)
- Formulaire complet
- Validation en temps réel
- Confirmation visuelle
- Informations pratiques

### 📞 Contact (contact.html)
- Formulaire de contact
- Coordonnées complètes
- Google Maps
- Horaires d'ouverture

### 🎨 Démo (demo.html)
- Démonstration des fonctionnalités
- Palette de couleurs
- Exemples interactifs
- Guide de test

## 🎨 Palette de Couleurs

```css
--primary-burgundy: #c6a266  /* Or/Beige principal */
--primary-gold: #d4af37      /* Or brillant */
--accent-copper: #b87333     /* Cuivre accent */
--neutral-black: #0a0a0a     /* Noir profond */
--neutral-dark: #1a1a1a      /* Gris très foncé */
--neutral-white: #ffffff     /* Blanc pur */
```

## 🛠️ Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Variables, Grid, Flexbox, Animations
- **JavaScript ES6+** - Vanilla JS, pas de dépendances
- **Intersection Observer API** - Animations au scroll
- **Service Worker** - Support PWA
- **Manifest.json** - Application web progressive

## 📱 Compatibilité

### Navigateurs Supportés
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+
- ❌ Internet Explorer (non supporté)

### Appareils Testés
- ✅ iPhone (SE, 12, 13, 14)
- ✅ iPad
- ✅ Android (Samsung, Google Pixel, Xiaomi)
- ✅ Desktop (Windows, macOS, Linux)

## 🚀 Déploiement

### Options Gratuites
1. **GitHub Pages** - Hébergement gratuit
2. **Netlify** - Déploiement automatique
3. **Vercel** - Performance optimale

Voir [DEPLOIEMENT.md](DEPLOIEMENT.md) pour les instructions détaillées.

## 📊 Performance

### Objectifs Lighthouse
- Performance : > 90
- Accessibility : > 95
- Best Practices : > 90
- SEO : > 90

### Optimisations
- Lazy loading des images
- GPU acceleration
- Compression des assets
- Cache optimisé
- Service Worker

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteurs

- **Développeur Principal** - [Votre Nom]
- **Design** - Inspiré par Wix Bar 121 Template

## 🙏 Remerciements

- Template Wix Bar 121 pour l'inspiration
- Google Fonts pour les polices
- Unsplash pour les images de démonstration
- La communauté open source

## 📞 Contact

**Le Z Restaurant & Lounge**
- 📍 Immeuble Matrix, 8ième niveau, Kinshasa, RDC
- 📞 +243 123 456 789
- ✉️ contact@lezrestaurant.cd
- 🌐 www.lezrestaurant.cd

## 🔗 Liens Utiles

- [Site Web](https://votre-site.com)
- [Page Facebook](https://facebook.com/lezrestaurant)
- [Instagram](https://instagram.com/lezrestaurant)
- [Twitter](https://twitter.com/lezrestaurant)

---

**Fait avec ❤️ à Kinshasa, RDC**

⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile !
