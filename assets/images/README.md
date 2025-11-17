# 📸 Guide des Images - Le Z Restaurant & Lounge

## 📋 Images Requises

### Hero Section
- **hero.jpg** (1920x1080px)
  - Image principale de la page d'accueil
  - Doit montrer l'ambiance du restaurant
  - Format : JPG, qualité 85%
  - Taille max : 500KB

### Galerie (Section Gallery)
- **img/1.jpg** (800x800px) - Plat signature
- **img/2.jpg** (800x800px) - Dessert ou ambiance
- **img/8.jpg** (800x800px) - Chef ou cuisine
- **img/10.jpg** (800x800px) - Entrée ou bar

### Carousel
- **img/1.jpg** (1200x800px) - Plat principal
- **img/2.jpg** (1200x800px) - Dessert
- **img/10.jpg** (1200x800px) - Entrée

### Icons PWA
Générer avec [RealFaviconGenerator](https://realfavicongenerator.net/)
- **icon-72x72.png**
- **icon-96x96.png**
- **icon-128x128.png**
- **icon-144x144.png**
- **icon-152x152.png**
- **icon-192x192.png**
- **icon-384x384.png**
- **icon-512x512.png**

### Menu Items (Optionnel)
Pour la page menu, créer un dossier `menu-items/` avec :
- foie-gras.jpg
- carpaccio.jpg
- veloute.jpg
- chevre.jpg
- magret.jpg
- boeuf.jpg
- bar.jpg
- risotto.jpg
- homard.jpg
- tatin.jpg
- fondant.jpg
- brulee.jpg
- millefeuille.jpg
- vin-rouge.jpg
- vin-blanc.jpg
- champagne.jpg
- eau.jpg
- cafe.jpg
- the.jpg

## 🎨 Spécifications Techniques

### Format
- **JPG** pour les photos
- **PNG** pour les logos et icons
- **WebP** pour les versions optimisées (optionnel)

### Dimensions Recommandées
- **Hero** : 1920x1080px (16:9)
- **Galerie** : 800x800px (1:1)
- **Carousel** : 1200x800px (3:2)
- **Menu items** : 600x400px (3:2)

### Optimisation
- Compression : 80-85% pour JPG
- Taille max : 500KB par image
- Utiliser TinyPNG ou ImageOptim

### Outils Recommandés
- **Photoshop** - Édition professionnelle
- **GIMP** - Alternative gratuite
- **Canva** - Design en ligne
- **TinyPNG** - Compression
- **ImageOptim** - Optimisation Mac
- **Squoosh** - Optimisation web

## 📷 Conseils Photo

### Pour le Hero
- Éclairage chaleureux
- Ambiance lounge/bar
- Profondeur de champ
- Pas de texte sur l'image

### Pour la Galerie
- Haute résolution
- Bonne luminosité
- Composition soignée
- Couleurs vibrantes

### Pour le Menu
- Fond neutre ou contexte
- Éclairage naturel
- Mise en valeur du plat
- Angle appétissant

## 🔄 Images Temporaires

En attendant vos vraies photos, vous pouvez utiliser :

### Unsplash (Gratuit)
```
https://unsplash.com/s/photos/restaurant
https://unsplash.com/s/photos/food
https://unsplash.com/s/photos/bar
```

### Pexels (Gratuit)
```
https://www.pexels.com/search/restaurant/
https://www.pexels.com/search/gourmet-food/
```

### Placeholder
```html
<!-- Placeholder temporaire -->
<img src="https://via.placeholder.com/800x800/c6a266/ffffff?text=Le+Z+Restaurant" alt="Placeholder">
```

## 📁 Structure des Dossiers

```
assets/images/
├── hero.jpg                    # Hero principal
├── placeholder.jpg             # Image par défaut
├── img/
│   ├── 1.jpg                  # Galerie/Carousel
│   ├── 2.jpg
│   ├── 8.jpg
│   └── 10.jpg
├── menu-items/                # Items du menu
│   ├── foie-gras.jpg
│   ├── carpaccio.jpg
│   └── ...
├── icons/                     # Icons PWA
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   └── ...
└── README.md                  # Ce fichier
```

## ✅ Checklist Images

### Avant le Déploiement
- [ ] Hero image optimisée
- [ ] 4 images pour la galerie
- [ ] 3 images pour le carousel
- [ ] Icons PWA générés
- [ ] Images menu (optionnel)
- [ ] Toutes les images < 500KB
- [ ] Formats corrects (JPG/PNG)
- [ ] Dimensions appropriées
- [ ] Textes alternatifs définis

### Optimisation
- [ ] Compression appliquée
- [ ] Versions WebP créées (optionnel)
- [ ] Lazy loading configuré
- [ ] Dimensions définies dans HTML
- [ ] Placeholder pour erreurs

## 🎯 Priorités

### Haute Priorité
1. **hero.jpg** - Première impression
2. **img/1.jpg, 2.jpg, 8.jpg, 10.jpg** - Galerie
3. **Icons PWA** - Application mobile

### Moyenne Priorité
4. **Menu items** - Page menu
5. **Versions optimisées** - Performance

### Basse Priorité
6. **Versions WebP** - Optimisation avancée
7. **Images supplémentaires** - Contenu additionnel

## 🔧 Scripts Utiles

### Redimensionner en Batch (ImageMagick)
```bash
# Installer ImageMagick
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: apt-get install imagemagick

# Redimensionner toutes les images
for file in *.jpg; do
  convert "$file" -resize 800x800^ -gravity center -extent 800x800 "resized_$file"
done
```

### Optimiser en Batch
```bash
# Avec ImageMagick
for file in *.jpg; do
  convert "$file" -quality 85 "optimized_$file"
done
```

### Générer WebP
```bash
# Installer cwebp
# Convertir en WebP
for file in *.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

## 📞 Besoin d'Aide ?

Si vous avez besoin d'aide pour :
- Prendre des photos professionnelles
- Optimiser vos images
- Créer des icons PWA
- Retoucher des photos

Contactez : contact@lezrestaurant.cd

---

**Note** : Les images sont essentielles pour l'expérience utilisateur. Investissez dans de bonnes photos !
