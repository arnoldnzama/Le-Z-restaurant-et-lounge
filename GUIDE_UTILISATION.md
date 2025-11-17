# Guide d'Utilisation - Le Z Restaurant & Lounge

## 🎯 Nouvelles Fonctionnalités

### 1. Navigation Améliorée
- **Navbar transparente** : La barre de navigation devient plus opaque au scroll
- **Menu mobile** : Cliquez sur le hamburger (☰) pour ouvrir le menu
- **Smooth scroll** : Les liens d'ancrage défilent en douceur

### 2. Hero Section Interactive
- **Effet parallax** : L'image de fond se déplace légèrement au scroll
- **Indicateur de scroll** : Animation qui invite à faire défiler la page
- **Animations séquencées** : Le titre, sous-titre et bouton apparaissent progressivement

### 3. Section Statistiques
- **Compteurs animés** : Les chiffres s'animent de 0 à leur valeur finale
- **Déclenchement au scroll** : L'animation démarre quand la section devient visible
- Affiche : 15+ années, 50K+ clients, 200+ plats, 5★ note

### 4. Galerie Photos
- **Grille responsive** : 1 colonne (mobile) → 3 colonnes (tablet) → 4 colonnes (desktop)
- **Effet hover** : Overlay avec titre au survol
- **Lightbox** : Cliquez sur une image pour l'agrandir en plein écran
  - Fermez avec le bouton ×, en cliquant à l'extérieur, ou avec la touche Échap

### 5. Section Témoignages
- **Design moderne** : Cartes avec effet glassmorphism
- **Guillemets géants** : Élément décoratif en arrière-plan
- **Notation** : Étoiles dorées pour chaque témoignage

### 6. Section Événements
- **Cartes d'événements** : Design moderne avec badge de date
- **Informations détaillées** : Horaires et conditions
- Affiche : Soirée Jazz (vendredis) et Horaires d'ouverture

### 7. Footer Enrichi
- **4 sections** : À propos, Horaires, Contact, Newsletter
- **Liens sociaux** : Facebook, Instagram, Twitter avec animations
- **Newsletter** : Formulaire d'inscription avec validation
- **Liens légaux** : Mentions légales, Politique de confidentialité, CGV

### 8. Système de Notifications
- **Toast notifications** : Messages en haut à droite
- **Types** : Success (vert), Error (rouge), Info (or)
- **Auto-fermeture** : Disparaît après 5 secondes
- Exemple : S'inscrire à la newsletter affiche une notification

### 9. Bouton Retour en Haut
- **Apparition automatique** : Visible après 500px de scroll
- **Design circulaire** : Bouton flottant en bas à droite
- **Animation** : Effet d'agrandissement au hover
- **Scroll fluide** : Remonte en douceur vers le haut

## 🎨 Effets Visuels

### Animations au Scroll
Plusieurs éléments s'animent quand ils deviennent visibles :
- `.fade-up-scroll` : Apparition depuis le bas
- `.fade-left-scroll` : Apparition depuis la gauche
- `.fade-right-scroll` : Apparition depuis la droite
- `.fade-in-scroll` : Fondu simple
- `.zoom-in-scroll` : Zoom progressif

### Effets Hover
- **Cartes** : Élévation et ombre au survol
- **Images** : Zoom léger (scale 1.05-1.15)
- **Boutons** : Effet de vague et changement de couleur
- **Liens** : Changement de couleur vers l'or

## 📱 Responsive Design

### Mobile (< 768px)
- Menu hamburger
- Galerie en 1 colonne
- Footer empilé verticalement
- Statistiques en 2 colonnes
- Textes et espacements réduits

### Tablet (768px - 1023px)
- Menu horizontal
- Galerie en 3 colonnes
- Footer en 2 colonnes
- Statistiques en 4 colonnes

### Desktop (≥ 1024px)
- Toutes les fonctionnalités
- Galerie en 4 colonnes
- Footer en 4 colonnes
- Effets parallax activés

## ⌨️ Raccourcis Clavier

- **Échap** : Ferme la lightbox ou le popup
- **Tab** : Navigation entre les éléments interactifs
- **Entrée/Espace** : Active les boutons et liens

## ♿ Accessibilité

### Fonctionnalités
- **Skip to main content** : Lien invisible (visible au focus) pour sauter la navigation
- **ARIA labels** : Tous les éléments interactifs sont labellisés
- **Focus visible** : Contour doré sur les éléments focusés
- **Contraste élevé** : Support du mode high contrast
- **Mouvement réduit** : Respect de prefers-reduced-motion

### Navigation au Clavier
- Tous les éléments interactifs sont accessibles au clavier
- L'ordre de tabulation est logique
- Les états de focus sont clairement visibles

## 🎯 Tester les Fonctionnalités

### 1. Navbar au Scroll
1. Faites défiler la page vers le bas
2. Observez la navbar devenir plus opaque

### 2. Compteurs Animés
1. Faites défiler jusqu'à la section "Statistiques"
2. Les chiffres s'animent automatiquement

### 3. Galerie Lightbox
1. Cliquez sur n'importe quelle image de la galerie
2. L'image s'ouvre en plein écran
3. Fermez avec ×, Échap, ou clic extérieur

### 4. Newsletter
1. Faites défiler jusqu'au footer
2. Entrez votre email dans le champ newsletter
3. Cliquez sur "S'inscrire"
4. Une notification de succès apparaît

### 5. Retour en Haut
1. Faites défiler vers le bas (> 500px)
2. Un bouton circulaire apparaît en bas à droite
3. Cliquez pour remonter en douceur

### 6. Menu Mobile
1. Réduisez la fenêtre à < 768px (ou utilisez les outils développeur)
2. Cliquez sur le hamburger (☰)
3. Le menu s'ouvre depuis la droite
4. Cliquez à l'extérieur ou sur un lien pour fermer

## 🐛 Dépannage

### Les animations ne fonctionnent pas
- Vérifiez que JavaScript est activé
- Vérifiez la console pour les erreurs
- Certains navigateurs anciens peuvent ne pas supporter toutes les fonctionnalités

### Les images ne se chargent pas
- Vérifiez que les chemins d'images sont corrects
- Les images utilisent le lazy loading (chargement différé)

### Le menu mobile ne s'ouvre pas
- Vérifiez que JavaScript est chargé
- Essayez de rafraîchir la page
- Vérifiez la console pour les erreurs

## 📊 Compatibilité Navigateurs

### Support Complet
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

### Support Partiel
- Internet Explorer : Non supporté (utiliser Edge)
- Navigateurs mobiles : Support complet sur versions récentes

## 🔧 Personnalisation

### Modifier les Couleurs
Éditez les variables CSS dans `css/style.css` :
```css
:root {
  --primary-burgundy: #c6a266;
  --primary-gold: #d4af37;
  --accent-copper: #b87333;
  /* ... */
}
```

### Modifier les Animations
Ajustez les durées dans les variables :
```css
:root {
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### Ajouter des Images à la Galerie
Dans `index.html`, section `.gallery-grid` :
```html
<div class="gallery-item fade-in-scroll">
  <img src="votre-image.jpg" alt="Description" loading="lazy">
  <div class="gallery-overlay">
    <h3>Titre</h3>
  </div>
</div>
```

## 📞 Support

Pour toute question ou problème :
- Email : contact@lezrestaurant.cd
- Téléphone : +243 123 456 789
- Adresse : Immeuble Matrix, 8ième niveau, Kinshasa

---

**Version** : 2.0 - Améliorations Wix-inspired
**Dernière mise à jour** : Novembre 2024
