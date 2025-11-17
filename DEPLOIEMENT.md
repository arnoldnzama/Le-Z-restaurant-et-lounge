# 🚀 Guide de Déploiement - Le Z Restaurant & Lounge

## 📋 Prérequis

### Fichiers Nécessaires
- ✅ Tous les fichiers HTML (index.html, menu.html, reservation.html, contact.html, demo.html)
- ✅ Dossier css/ avec style.css
- ✅ Dossier js/ avec tous les fichiers JavaScript
- ✅ Dossier assets/ avec les images
- ✅ manifest.json
- ✅ sw.js (Service Worker)

### Images à Préparer
Assurez-vous d'avoir les images suivantes dans `assets/images/` :
- `hero.jpg` - Image principale du hero (1920x1080px recommandé)
- `img/1.jpg`, `img/2.jpg`, `img/8.jpg`, `img/10.jpg` - Images pour galerie et sections
- Icons PWA (72x72 à 512x512px)

## 🌐 Options de Déploiement

### Option 1 : GitHub Pages (Gratuit)

#### Étapes
1. Créer un repository GitHub
2. Pousser tous les fichiers
3. Aller dans Settings > Pages
4. Sélectionner la branche main
5. Cliquer sur Save

#### Commandes
```bash
git init
git add .
git commit -m "Initial commit - Version 2.0"
git branch -M main
git remote add origin https://github.com/votre-username/restaurant.git
git push -u origin main
```

#### URL
Votre site sera accessible à : `https://votre-username.github.io/restaurant/`

### Option 2 : Netlify (Gratuit)

#### Méthode 1 : Drag & Drop
1. Aller sur [netlify.com](https://netlify.com)
2. Créer un compte
3. Glisser-déposer le dossier du projet
4. Le site est en ligne !

#### Méthode 2 : CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### Avantages
- HTTPS automatique
- Domaine personnalisé gratuit
- Déploiement continu
- Formulaires intégrés

### Option 3 : Vercel (Gratuit)

#### Installation
```bash
npm install -g vercel
vercel login
vercel
```

#### Configuration
Créer `vercel.json` :
```json
{
  "version": 2,
  "builds": [
    {
      "src": "*.html",
      "use": "@vercel/static"
    }
  ]
}
```

### Option 4 : Hébergement Traditionnel

#### Serveurs Compatibles
- Apache
- Nginx
- IIS (Windows)

#### Configuration Apache (.htaccess)
```apache
# Activer la compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Cache des ressources
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Redirection HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Page d'erreur personnalisée
ErrorDocument 404 /404.html
```

#### Upload FTP
1. Connectez-vous à votre serveur via FTP
2. Uploadez tous les fichiers dans le dossier public_html/
3. Vérifiez les permissions (755 pour les dossiers, 644 pour les fichiers)

## 🔧 Configuration Post-Déploiement

### 1. Vérifier les Chemins
Assurez-vous que tous les chemins sont relatifs :
```html
<!-- Bon -->
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js"></script>

<!-- Éviter -->
<link rel="stylesheet" href="/css/style.css">
```

### 2. Tester le Service Worker
1. Ouvrir les DevTools (F12)
2. Aller dans Application > Service Workers
3. Vérifier que le SW est enregistré
4. Tester le mode hors ligne

### 3. Configurer le Domaine Personnalisé

#### Sur Netlify
1. Aller dans Domain Settings
2. Ajouter votre domaine
3. Configurer les DNS chez votre registrar :
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: votre-site.netlify.app
```

#### Sur GitHub Pages
1. Ajouter un fichier `CNAME` à la racine
2. Contenu : `www.votredomaine.com`
3. Configurer les DNS :
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: votre-username.github.io
```

### 4. Activer HTTPS
- Sur Netlify/Vercel : Automatique
- Sur GitHub Pages : Cocher "Enforce HTTPS" dans les settings
- Sur hébergement traditionnel : Installer Let's Encrypt

## 📊 Optimisations Avant Déploiement

### 1. Optimiser les Images
```bash
# Installer ImageMagick ou utiliser un outil en ligne
# Redimensionner et compresser
convert hero.jpg -resize 1920x1080 -quality 85 hero-optimized.jpg
```

### 2. Minifier CSS et JS (Optionnel)
```bash
# Installer les outils
npm install -g clean-css-cli uglify-js

# Minifier CSS
cleancss -o css/style.min.css css/style.css

# Minifier JS
uglifyjs js/main.js -o js/main.min.js
```

### 3. Générer les Icons PWA
Utiliser [RealFaviconGenerator](https://realfavicongenerator.net/) :
1. Uploader votre logo
2. Télécharger le package
3. Remplacer les icons dans assets/images/

## ✅ Checklist de Déploiement

### Avant le Déploiement
- [ ] Tester sur Chrome, Firefox, Safari
- [ ] Tester sur mobile (iOS et Android)
- [ ] Vérifier tous les liens
- [ ] Optimiser toutes les images
- [ ] Tester les formulaires
- [ ] Vérifier le Service Worker
- [ ] Tester le mode hors ligne
- [ ] Valider le HTML (validator.w3.org)
- [ ] Valider le CSS (jigsaw.w3.org/css-validator)
- [ ] Tester l'accessibilité (WAVE, Lighthouse)

### Après le Déploiement
- [ ] Vérifier que le site est accessible
- [ ] Tester HTTPS
- [ ] Vérifier les performances (PageSpeed Insights)
- [ ] Tester sur différents appareils
- [ ] Configurer Google Analytics (optionnel)
- [ ] Soumettre à Google Search Console
- [ ] Créer un sitemap.xml
- [ ] Configurer robots.txt

## 🔍 Tests de Performance

### Google PageSpeed Insights
1. Aller sur [pagespeed.web.dev](https://pagespeed.web.dev/)
2. Entrer l'URL de votre site
3. Objectifs :
   - Performance : > 90
   - Accessibility : > 95
   - Best Practices : > 90
   - SEO : > 90

### Lighthouse (Chrome DevTools)
1. Ouvrir DevTools (F12)
2. Aller dans l'onglet Lighthouse
3. Lancer l'audit
4. Corriger les problèmes identifiés

## 📱 Test sur Appareils Réels

### iOS
- iPhone SE (petit écran)
- iPhone 12/13 (écran moyen)
- iPhone 14 Pro Max (grand écran)
- iPad (tablette)

### Android
- Samsung Galaxy S21
- Google Pixel 6
- Xiaomi Redmi Note
- Tablette Android

### Navigateurs
- Chrome
- Safari
- Firefox
- Edge
- Samsung Internet

## 🐛 Dépannage

### Le site ne s'affiche pas
1. Vérifier les chemins des fichiers
2. Vérifier la console pour les erreurs
3. Vérifier que tous les fichiers sont uploadés
4. Vérifier les permissions des fichiers

### Les images ne se chargent pas
1. Vérifier les chemins (sensible à la casse)
2. Vérifier le format (jpg, png, webp)
3. Vérifier la taille des fichiers (< 1MB recommandé)

### Le Service Worker ne fonctionne pas
1. HTTPS est obligatoire (sauf localhost)
2. Vérifier le chemin dans sw.js
3. Vider le cache et recharger
4. Vérifier la console pour les erreurs

### Les animations ne fonctionnent pas
1. Vérifier que JavaScript est activé
2. Vérifier la console pour les erreurs
3. Tester sur un navigateur récent
4. Vérifier que les fichiers JS sont chargés

## 📞 Support

### Ressources
- Documentation : Voir GUIDE_UTILISATION.md
- Améliorations : Voir AMELIORATIONS.md
- Changelog : Voir CHANGELOG.md

### Contact
- Email : contact@lezrestaurant.cd
- Téléphone : +243 123 456 789

## 🎉 Félicitations !

Votre site est maintenant en ligne ! N'oubliez pas de :
- Partager l'URL sur les réseaux sociaux
- Ajouter l'URL sur Google My Business
- Créer des cartes de visite avec le QR Code
- Promouvoir le site auprès de vos clients

---

**Bonne chance avec votre restaurant ! 🍽️**
