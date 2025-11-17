# ⚡ Installation Rapide - Le Z Restaurant & Lounge

## 🚀 En 5 Minutes

### Étape 1 : Télécharger le Projet
```bash
# Option A : Cloner depuis GitHub
git clone https://github.com/votre-username/restaurant.git
cd restaurant

# Option B : Télécharger le ZIP
# Extraire le fichier ZIP dans un dossier
```

### Étape 2 : Ajouter Vos Images
```
assets/images/
├── hero.jpg          ← Votre image principale
├── img/
│   ├── 1.jpg        ← Image galerie 1
│   ├── 2.jpg        ← Image galerie 2
│   ├── 8.jpg        ← Image galerie 3
│   └── 10.jpg       ← Image galerie 4
```

**Pas d'images ?** Le site fonctionnera quand même avec des placeholders.

### Étape 3 : Personnaliser
Ouvrir `index.html` et modifier :
```html
<!-- Ligne 42 : Nom du restaurant -->
<a href="index.html" class="logo">Votre Nom</a>

<!-- Ligne 68 : Titre hero -->
<h1 class="hero-title">Bienvenue chez Votre Restaurant</h1>

<!-- Ligne 69 : Sous-titre -->
<p class="hero-subtitle">Votre slogan ici</p>
```

### Étape 4 : Tester Localement
```bash
# Option A : Python (si installé)
python -m http.server 8000

# Option B : Node.js (si installé)
npx serve

# Option C : Double-cliquer sur index.html
```

Ouvrir : `http://localhost:8000`

### Étape 5 : Déployer (Gratuit)

#### Option Netlify (Recommandé)
1. Aller sur [netlify.com](https://netlify.com)
2. Créer un compte (gratuit)
3. Glisser-déposer le dossier du projet
4. ✅ Votre site est en ligne !

#### Option GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-username/restaurant.git
git push -u origin main

# Puis dans GitHub :
# Settings > Pages > Source: main branch > Save
```

## 🎨 Personnalisation Rapide

### Changer les Couleurs
Ouvrir `css/style.css` (lignes 10-20) :
```css
:root {
  --primary-burgundy: #c6a266;  /* Votre couleur principale */
  --primary-gold: #d4af37;      /* Votre couleur accent */
  --accent-copper: #b87333;     /* Votre couleur secondaire */
}
```

### Modifier le Menu
Ouvrir `js/main.js` (lignes 20-150) :
```javascript
const menuData = {
  entrees: [
    {
      name: 'Votre Entrée',
      description: 'Description',
      price: '15.00 €',
      // ...
    }
  ]
}
```

### Changer les Informations de Contact
Ouvrir `index.html` (lignes 250-280) :
```html
<p>📍 Votre Adresse</p>
<p>📞 Votre Téléphone</p>
<p>✉️ Votre Email</p>
```

## ✅ Checklist Rapide

### Avant de Déployer
- [ ] Remplacer les images
- [ ] Modifier le nom du restaurant
- [ ] Changer les informations de contact
- [ ] Personnaliser le menu
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens

### Après le Déploiement
- [ ] Tester le site en ligne
- [ ] Partager l'URL
- [ ] Configurer un domaine personnalisé (optionnel)
- [ ] Ajouter Google Analytics (optionnel)

## 🆘 Problèmes Courants

### Les images ne s'affichent pas
✅ Vérifier que les fichiers existent dans `assets/images/`
✅ Vérifier les noms de fichiers (sensible à la casse)

### Le menu mobile ne fonctionne pas
✅ Vérifier que `js/main.js` est chargé
✅ Ouvrir la console (F12) pour voir les erreurs

### Le site ne s'affiche pas en ligne
✅ Vérifier que tous les fichiers sont uploadés
✅ Vérifier les chemins (relatifs, pas absolus)

## 📚 Documentation Complète

Pour plus de détails, consultez :
- **[README.md](README.md)** - Vue d'ensemble
- **[GUIDE_UTILISATION.md](GUIDE_UTILISATION.md)** - Guide complet
- **[DEPLOIEMENT.md](DEPLOIEMENT.md)** - Déploiement détaillé
- **[AMELIORATIONS.md](AMELIORATIONS.md)** - Documentation technique

## 🎯 Prochaines Étapes

1. **Contenu**
   - Ajouter de vraies photos
   - Compléter le menu
   - Ajouter des témoignages

2. **Personnalisation**
   - Changer les couleurs
   - Adapter les textes
   - Ajouter votre logo

3. **Marketing**
   - Partager sur les réseaux sociaux
   - Créer des cartes de visite avec QR Code
   - Référencer sur Google My Business

## 💡 Conseils

### Pour de Meilleures Photos
- Utilisez un bon éclairage
- Prenez plusieurs angles
- Éditez légèrement (luminosité, contraste)
- Optimisez la taille (< 500KB)

### Pour un Bon Référencement
- Ajoutez des descriptions uniques
- Utilisez des mots-clés pertinents
- Créez un compte Google My Business
- Partagez sur les réseaux sociaux

### Pour Plus de Clients
- Offre spéciale pour les nouveaux clients
- Programme de fidélité
- Newsletter avec promotions
- Événements réguliers

## 📞 Besoin d'Aide ?

### Support
- 📧 Email : contact@lezrestaurant.cd
- 📱 Téléphone : +243 123 456 789

### Ressources
- [Documentation complète](README.md)
- [Tutoriels vidéo](#) (à venir)
- [Forum communautaire](#) (à venir)

## 🎉 Félicitations !

Votre site est prêt ! Maintenant :
1. ✅ Testez toutes les fonctionnalités
2. ✅ Partagez avec vos clients
3. ✅ Collectez les retours
4. ✅ Améliorez continuellement

---

**Temps total : 5-10 minutes** ⏱️

**Difficulté : Facile** 🟢

**Coût : Gratuit** 💰

---

**Bon courage avec votre restaurant ! 🍽️✨**
