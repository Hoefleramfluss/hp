# Workflow.AI Homepage

> **Produktionsreife Homepage** für Workflow.AI – KI-Agenten für Praxis, Werkstatt & Gastro  
> Built with React + Vite + TailwindCSS + Framer Motion

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS 3.4
- **Animations**: Framer Motion 11
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions

## 🎨 Design Philosophy

Die Homepage folgt **pixelgenau** der Behance-Referenz:
- Futuristischer Dark Mode mit Neon-Akzenten
- Aurora-Glow-Effekte und weiche Schatten
- Smooth Scroll & Reveal-Animationen
- Mobile-first, hochresponsiv (320px → 1920px)

## 📂 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Hero.tsx           # Hero-Sektion mit Video & CTA
│   │   ├── Trust.tsx          # Trust Badges & Metriken
│   │   ├── Showcases.tsx      # WorkFlow.Med/Tec/Gastro/Personal
│   │   ├── Features.tsx       # Feature-Grid mit Icons
│   │   ├── Pricing.tsx        # Interaktiver Preisrechner
│   │   ├── CTA.tsx            # Demo-Formular
│   │   └── Footer.tsx         # Footer mit Links
│   ├── App.tsx                # Main App Component
│   ├── main.tsx               # Entry Point
│   └── index.css              # Global Styles
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── datenschutz.html
│   ├── impressum.html
│   └── .well-known/
│       └── security.txt
├── firebase.json              # Firebase Hosting Config
├── .firebaserc                # Firebase Project
├── .github/workflows/
│   └── deploy.yml             # CI/CD Pipeline
└── package.json
```

## 🔧 Development

### Lokaler Start

```bash
npm run dev
```

Öffnet http://localhost:3000 mit Hot Reload.

### Build

```bash
npm run build
```

Erstellt optimierten Production Build in `/dist`.

### Lint

```bash
npm run lint
```

## 🌐 Firebase Hosting Deployment

### Erstmalige Einrichtung

```bash
# 1. Firebase CLI installieren
npm i -g firebase-tools

# 2. Login
firebase login

# 3. Projekt initialisieren (falls nicht vorhanden)
firebase projects:create voxon-app

# 4. Projekt verwenden
firebase use voxon-app

# 5. Hosting initialisieren
firebase init hosting
# - Public directory: dist
# - Configure as SPA: Yes
# - Setup automatic builds: No (handled by GitHub Actions)
```

### Domain-Verknüpfung (voxon.app)

```bash
# 1. Domain in Firebase Hosting hinzufügen
firebase hosting:domain:add voxon.app

# 2. TXT-Eintrag in Google DNS setzen
# Firebase gibt den Wert vor, z.B.:
# TXT @ firebase=voxon-app-xxxxx

# 3. Nach Verifizierung A/AAAA-Einträge setzen
# Firebase zeigt automatisch die IP-Adressen an

# 4. Optional: www-Subdomain
firebase hosting:domain:add www.voxon.app
```

**DNS-Einträge (Beispiel):**
```
Type  Name  Value
A     @     151.101.1.195
A     @     151.101.65.195
AAAA  @     2a04:4e42::645
AAAA  @     2a04:4e42:200::645
```

### Manuelles Deployment

```bash
# Build & Deploy
npm run build
firebase deploy --only hosting
```

### Automatisches Deployment (CI/CD)

Push auf `main` Branch triggert automatisch:
1. Install Dependencies
2. Build Production
3. Deploy zu Firebase Hosting

**Setup GitHub Secrets:**
1. Firebase Service Account erstellen:
   ```bash
   firebase login:ci
   ```
2. Token in GitHub Repository Secrets speichern als:
   - `FIREBASE_SERVICE_ACCOUNT_VOXON_APP`

## 📊 Performance & SEO

### Lighthouse Scores (Ziel: ≥95)

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimierungen

- ✅ Code Splitting (React, Framer Motion separate Chunks)
- ✅ Image Optimization (Video via CDN)
- ✅ Font Loading Optimization (Google Fonts preconnect)
- ✅ Tree Shaking & Minification (Vite)
- ✅ Gzip/Brotli Compression (Firebase)
- ✅ Security Headers (HSTS, CSP, XSS Protection)

### SEO

- **Meta Tags**: Title, Description, Keywords
- **OpenGraph**: Social Media Previews
- **Schema.org**: JSON-LD (Organization, WebSite)
- **Sitemap**: `/sitemap.xml`
- **Robots**: `/robots.txt`
- **Canonical URLs**: https://voxon.app/

## 🔒 Security

### Headers (via firebase.json)

- `Strict-Transport-Security`: HSTS Preload
- `X-Content-Type-Options`: nosniff
- `X-Frame-Options`: SAMEORIGIN
- `X-XSS-Protection`: 1; mode=block
- `Referrer-Policy`: strict-origin-when-cross-origin
- `Permissions-Policy`: Restrictive

### Security.txt

Verfügbar unter `/.well-known/security.txt` für Responsible Disclosure.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🎯 Inhalte

Alle Texte, Leistungen, Preise stammen von:
**https://workflow-ai-480743766879.us-west1.run.app**

### Hauptmodule

1. **WorkFlow.Med** – Praxis-Agent „Jürgen"
2. **WorkFlow.Tec** – Werkstätten-Assistent
3. **WorkFlow.Gastro** – Restaurant-Bot „Toni"
4. **PersonalAgents** – Individuelle Agenten

### Preismodelle

- **Starter**: 89€/Monat (300 Min inkl.)
- **Business**: 219€/Monat (900 Min inkl.)
- **Enterprise**: Individuell
- **PAYG (FLEX)**: 0,24€/Min (Mindestumsatz 29€)

## 📞 Kontakt & Support

- **E-Mail**: kontakt@workflow-ai.de
- **Website**: https://voxon.app
- **Support**: datenschutz@workflow-ai.de

## 📜 Rechtliches

- **Datenschutz**: `/datenschutz.html`
- **Impressum**: `/impressum.html`
- **DSGVO-konform**: ✅ Made in Austria

## 🚦 Deployment Status

### Production
- **URL**: https://voxon.app
- **Status**: [![Deploy Status](https://github.com/username/repo/workflows/deploy.yml/badge.svg)](https://github.com/username/repo/actions)

### Firebase Hosting
```bash
# Check deployment
firebase hosting:sites:list

# Rollback if needed
firebase hosting:clone SOURCE_SITE_ID:SOURCE_VERSION TARGET_SITE_ID
```

## 🛠 Troubleshooting

### Build Errors

```bash
# Clear cache
rm -rf node_modules dist .vite
npm install
npm run build
```

### Deployment Issues

```bash
# Re-authenticate
firebase login --reauth

# Check project
firebase use --list

# Manual deploy
firebase deploy --only hosting --debug
```

### Domain not working

1. Verify DNS propagation: `dig voxon.app`
2. Check Firebase Hosting Dashboard
3. Wait up to 48h for DNS propagation

## 📈 Next Steps

- [ ] Add Analytics (Google Analytics 4 + Consent Banner)
- [ ] Add CMS for easy content updates
- [ ] Implement Form Backend (Firebase Functions or Netlify Forms)
- [ ] Add Blog Section
- [ ] Multi-language support (EN/DE)
- [ ] A/B Testing Setup
- [ ] Performance Monitoring (Firebase Performance)

## 📝 License

© 2025 Workflow.AI. Alle Rechte vorbehalten.

---

**Built with ❤️ in Austria**
