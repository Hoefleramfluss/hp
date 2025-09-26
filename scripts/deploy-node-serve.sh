#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEPLOY_DIR="$HOME/GeminihpSiteNode"
APP_NAME="geminihp-site"
HEROKU_GIT="https://git.heroku.com/${APP_NAME}.git"

# Ensure Heroku app uses Node buildpack
heroku buildpacks:clear -a "$APP_NAME" || true
heroku buildpacks:set heroku/nodejs -a "$APP_NAME"

# Install deps and build
cd "$APP_DIR"
if [ ! -f package-lock.json ]; then npm install --package-lock-only >/dev/null 2>&1 || true; fi
npm ci
npm run build

# Prepare minimal Node+serve repo
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
cp -R "$APP_DIR/dist" "$DEPLOY_DIR/"
cat > "$DEPLOY_DIR/package.json" <<'JSON'
{
  "name": "geminihp-site",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "start": "serve -s dist -l ${PORT}",
    "start:prod": "serve -s dist -l ${PORT}"
  },
  "dependencies": { "serve": "^14.2.4" },
  "engines": { "node": "20.x" }
}
JSON
printf "web: npm run start:prod\n" > "$DEPLOY_DIR/Procfile"

cd "$DEPLOY_DIR"
if [ ! -d .git ]; then
  git init -b main
fi

git add -A
(git commit -m "deploy: node serve (dist + Procfile + package.json)" || true)

if git remote | grep -q '^heroku$'; then
  git remote set-url heroku "$HEROKU_GIT"
else
  git remote add heroku "$HEROKU_GIT"
fi

echo "Pushing to Heroku app: $APP_NAME via Node buildpack"
git push heroku main -f

echo "Done. Visit:"
heroku apps:info -a "$APP_NAME" | sed -nE 's/^\s*Web URL:\s*(https?:\/\/[^ ]+).*/\1/p'
