# 🚀 Deployment Guide – voxon.app

## Voraussetzungen

- Node.js 18+ installiert
- Firebase CLI installiert: `npm i -g firebase-tools`
- Zugriff auf Google Cloud/Firebase Projekt
- Domain voxon.app in Google DNS oder Firebase

## 🔥 Firebase Projekt Setup

### 1. Firebase Projekt erstellen (einmalig)

```bash
# Login
firebase login

# Neues Projekt erstellen
firebase projects:create voxon-app

# Projekt auswählen
firebase use voxon-app
```

### 2. Hosting initialisieren

```bash
firebase init hosting

# Antworten:
# - What do you want to use as your public directory? → dist
# - Configure as a single-page app? → Yes
# - Set up automatic builds with GitHub? → No
```

## 🌐 Domain-Konfiguration

### Option A: Domain bereits in Google DNS

```bash
# Domain zu Firebase Hosting hinzufügen
firebase hosting:domain:add voxon.app
```

Firebase zeigt TXT-Record zur Verifizierung an:
```
Type: TXT
Name: @
Value: firebase=voxon-app-abc123xyz
```

**In Google DNS eintragen:**
1. Google Cloud Console → Network Services → Cloud DNS
2. Zone auswählen (voxon.app)
3. ADD RECORD SET
4. Record type: TXT
5. TXT data: `firebase=voxon-app-abc123xyz`
6. CREATE

**Nach Verifizierung (ca. 5-10 Min):**

Firebase zeigt automatisch A/AAAA-Records an:
```
Type  Name  Value
A     @     151.101.1.195
A     @     151.101.65.195
AAAA  @     2a04:4e42::645
AAAA  @     2a04:4e42:200::645
```

Diese ebenfalls in Google DNS eintragen.

### Option B: Domain bei anderem Provider

1. TXT-Record bei Domain-Provider eintragen
2. Nach Verifizierung A/AAAA-Records eintragen
3. Warten auf DNS-Propagation (bis zu 48h)

**DNS-Propagation prüfen:**
```bash
dig voxon.app
nslookup voxon.app
```

### www-Subdomain (Optional)

```bash
firebase hosting:domain:add www.voxon.app

# Redirect in firebase.json bereits konfiguriert:
# www.voxon.app → voxon.app (301)
```

## 🛠 Lokaler Build & Test

```bash
# Dependencies installieren
npm install

# Development Server
npm run dev
# → http://localhost:3000

# Production Build testen
npm run build
npm run preview
# → http://localhost:4173
```

## 📦 Manuelles Deployment

```bash
# 1. Build erstellen
npm run build

# 2. Deploy zu Firebase
firebase deploy --only hosting

# 3. Erfolgsmeldung prüfen
# ✔  Deploy complete!
# Hosting URL: https://voxon-app.web.app
# Custom Domain: https://voxon.app
```

## 🤖 Automatisches Deployment (CI/CD)

### GitHub Actions Setup

**1. Firebase Service Account erstellen**

```bash
firebase login:ci
# → Generiert Token: 1//abc123xyz...
```

**2. GitHub Repository Secret hinzufügen**

- Repository → Settings → Secrets and variables → Actions
- New repository secret:
  - Name: `FIREBASE_SERVICE_ACCOUNT_VOXON_APP`
  - Value: Token aus Schritt 1

**3. Workflow aktivieren**

Die Datei `.github/workflows/deploy.yml` ist bereits vorhanden.

**Push auf main Branch:**
```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

GitHub Actions triggert automatisch:
1. Install Dependencies
2. Build Production
3. Deploy zu Firebase Hosting

**Status prüfen:**
- Repository → Actions Tab
- Oder: Badge in README

## 🔐 Security Headers (bereits konfiguriert)

In `firebase.json`:
- HSTS Preload
- X-Content-Type-Options
- X-Frame-Options
- CSP Headers
- Referrer Policy

## 📊 Monitoring & Analytics

### Firebase Hosting Analytics

```bash
# Deployment History
firebase hosting:sites:list

# Rollback zu vorheriger Version
firebase hosting:clone voxon-app:VERSION_ID voxon-app
```

### Google Analytics (Optional)

1. GA4 Property erstellen
2. Measurement ID in `.env` eintragen:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Code in `index.html` einbinden

## 🚨 Troubleshooting

### Domain zeigt nicht auf Firebase

```bash
# DNS-Propagation prüfen
dig voxon.app
host voxon.app

# Firebase Status prüfen
firebase hosting:sites:get voxon-app

# Warte bis zu 48h für DNS-Propagation
```

### Build Errors

```bash
# Cache löschen
rm -rf node_modules dist .vite
npm install
npm run build
```

### Deployment schlägt fehl

```bash
# Re-authenticate
firebase login --reauth

# Debug Mode
firebase deploy --only hosting --debug

# Projekt prüfen
firebase use --list
firebase use voxon-app
```

### SSL-Zertifikat fehlt

- Firebase stellt automatisch Let's Encrypt Zertifikat aus
- Dauer: 15 Min bis 24 Std nach Domain-Verifizierung
- Status: Firebase Console → Hosting

## 📈 Performance Optimization

### Vor Deploy:

```bash
# Build analysieren
npm run build -- --mode production

# Lighthouse Test
npx lighthouse https://voxon.app --view
```

**Ziel: Lighthouse Score ≥95 in allen Kategorien**

### Cache-Headers (bereits konfiguriert)

- Statische Assets (JS/CSS/Images): 1 Jahr Cache
- HTML: No-Cache (immer frisch)

## 🔄 Rollback-Strategie

```bash
# Liste aller Deployments
firebase hosting:versions:list

# Rollback zu Version
firebase hosting:clone voxon-app:VERSION_ID voxon-app

# Beispiel:
firebase hosting:clone voxon-app:abc123xyz voxon-app
```

## ✅ Pre-Launch Checklist

- [ ] DNS-Einträge korrekt gesetzt
- [ ] SSL-Zertifikat aktiv (https funktioniert)
- [ ] Sitemap.xml verfügbar unter /sitemap.xml
- [ ] Robots.txt korrekt
- [ ] Impressum & Datenschutz ausgefüllt
- [ ] Kontaktformular getestet
- [ ] Mobile-Responsive geprüft
- [ ] Lighthouse Score ≥95
- [ ] Alle Links funktionieren
- [ ] OG-Images vorhanden
- [ ] Favicon sichtbar

## 📞 Support

Bei Problemen:
- Firebase Console: https://console.firebase.google.com
- Firebase Support: https://firebase.google.com/support
- GitHub Issues: Repository Issues Tab

---

**Letztes Update:** 3. Oktober 2025
