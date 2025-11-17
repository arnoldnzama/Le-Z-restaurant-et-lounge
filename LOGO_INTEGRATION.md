# Intégration du Logo - Le Z Restaurant & Lounge

## 📍 Emplacement du Logo

Le logo est situé dans : `assets/images/logo/logo.jpg`

## ✅ Intégration Complétée

### Header (Navigation)

Le logo a été ajouté dans la barre de navigation de toutes les pages :
- ✅ index.html
- ✅ menu.html
- ✅ reservation.html
- ✅ contact.html

**Structure HTML :**
```html
<a href="index.html" class="logo" aria-label="Retour à l'accueil">
  <img src="assets/images/logo/logo.jpg" alt="Le Z Restaurant & Lounge Logo" class="logo-img">
</a>
```

**Caractéristiques :**
- Image du logo seule (50px de hauteur sur desktop)
- Effet de hover avec zoom sur l'image (1.08x)
- Ombre portée qui s'intensifie au survol
- Bordures arrondies
- Design épuré et élégant

### Footer

Le logo a été ajouté dans le footer de toutes les pages :
- ✅ index.html
- ✅ menu.html
- ✅ reservation.html
- ✅ contact.html

**Structure HTML :**
```html
<div class="footer-logo">
  <img src="assets/images/logo/logo.jpg" alt="Le Z Restaurant & Lounge Logo">
</div>
```

**Caractéristiques :**
- Image du logo (80px de hauteur sur desktop)
- Effet de hover avec zoom
- Ombre portée prononcée
- Bordures arrondies

## 🎨 Styles CSS

### Logo Header (.logo)
```css
- Display: flex avec alignement centré
- Transition fluide sur tous les éléments
- Hauteur responsive (45px mobile, 50px desktop, 60px large desktop)
```

### Logo Image Header (.logo-img)
```css
- Hauteur: 50px (desktop), 60px (large desktop)
- Width: auto (ratio préservé)
- Border-radius: var(--radius-sm)
- Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3)
- Transform scale(1.08) au hover
- Box-shadow intensifiée au hover avec teinte dorée
```

### Logo Footer (.footer-logo)
```css
- Margin-bottom: var(--spacing-md)
- Hauteur image: 80px (desktop)
- Box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5)
- Transform scale(1.05) au hover
```

## 📱 Responsive Design

### Mobile (< 768px)
- Logo header : 45px de hauteur
- Logo footer : 80px (par défaut)

### Tablet (768px - 1023px)
- Logo header : 50px de hauteur
- Logo footer : 70px

### Desktop (1024px+)
- Logo header : 60px de hauteur
- Logo footer : 90px

## ✨ Effets Interactifs

### Au Survol (Header)
1. **Image** : Zoom de 8% (scale 1.08)
2. **Ombre** : Intensification avec teinte dorée
3. **Transition** : Fluide (0.3s ease)

### Au Survol (Footer)
1. **Image** : Zoom de 5% (scale 1.05)
2. **Transition** : Fluide (0.3s ease)

## 🎯 Accessibilité

- **Alt text** : "Le Z Restaurant & Lounge Logo" sur toutes les images
- **ARIA label** : "Retour à l'accueil" sur le lien du header
- **Focus visible** : Outline doré au focus clavier
- **Contraste** : Respecte les normes WCAG 2.1

## 🔧 Maintenance

### Changer le Logo

Pour remplacer le logo :
1. Remplacer le fichier `assets/images/logo/logo.jpg`
2. Conserver le même nom de fichier
3. Format recommandé : JPG, PNG ou WebP
4. Dimensions recommandées : 200x200px minimum
5. Ratio recommandé : Carré ou légèrement horizontal

### Ajuster la Taille

Pour modifier la taille du logo, éditer dans `css/style.css` :

**Header :**
```css
.logo-img {
  height: 50px; /* Valeur par défaut - Modifier selon besoin */
}

/* Desktop large */
@media (min-width: 1024px) {
  .logo-img {
    height: 60px; /* Modifier cette valeur */
  }
}

/* Mobile */
@media (max-width: 767px) {
  .logo-img {
    height: 45px; /* Modifier cette valeur */
  }
}
```

**Footer :**
```css
.footer-logo img {
  height: 80px; /* Modifier cette valeur */
}
```

## 📊 Performance

- **Format** : JPG (optimisé pour le web)
- **Chargement** : Immédiat (pas de lazy loading pour le logo)
- **Cache** : Mis en cache par le navigateur
- **Poids** : Optimisé pour performance

## 🎨 Cohérence Visuelle

Le logo s'intègre parfaitement avec :
- La palette de couleurs (or, cuivre, bordeaux)
- Les ombres et effets de profondeur
- Les animations et transitions
- Le design moderne et élégant

## ✅ Checklist de Vérification

- [x] Logo ajouté dans le header de toutes les pages
- [x] Logo ajouté dans le footer de toutes les pages
- [x] Styles CSS créés et optimisés
- [x] Responsive design implémenté
- [x] Effets de hover fonctionnels
- [x] Accessibilité respectée
- [x] Performance optimisée
- [x] Cohérence visuelle maintenue

## 🚀 Résultat

Le logo "Le Z Restaurant & Lounge" est maintenant parfaitement intégré dans toutes les pages du site, offrant :
- Une identité visuelle forte et cohérente
- Une navigation intuitive avec retour à l'accueil
- Des effets interactifs élégants
- Une expérience utilisateur optimale sur tous les appareils
