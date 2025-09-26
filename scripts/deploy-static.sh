#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEPLOY_DIR="$HOME/GeminihpSiteStatic"
APP_NAME="geminihp-site"
HEROKU_GIT="https://git.heroku.com/${APP_NAME}.git"

# Ensure Heroku app uses Static buildpack
heroku buildpacks:clear -a "$APP_NAME" || true
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static -a "$APP_NAME"

# Install deps and build
cd "$APP_DIR"
if [ ! -f package-lock.json ]; then npm install --package-lock-only >/dev/null 2>&1 || true; fi
npm ci
npm run build

# Prepare minimal static repo
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
cp -R "$APP_DIR/dist" "$DEPLOY_DIR/"
cat > "$DEPLOY_DIR/static.json" <<'JSON'
{
  "root": "dist",
  "clean_urls": true,
  "https_only": true,
  "routes": { "/**": "index.html" },
  "headers": { "/**": { "Cache-Control": "public, max-age=600" } }
}
JSON

cd "$DEPLOY_DIR"
if [ ! -d .git ]; then
  git init -b main
fi

git add -A
(git commit -m "deploy: static buildpack (dist + static.json)" || true)

if git remote | grep -q '^heroku$'; then
  git remote set-url heroku "$HEROKU_GIT"
else
  git remote add heroku "$HEROKU_GIT"
fi

echo "Pushing to Heroku app: $APP_NAME"
git push heroku main -f

echo "Done. Visit:"
heroku apps:info -a "$APP_NAME" | sed -nE 's/^\s*Web URL:\s*(https?:\/\/[^ ]+).*/\1/p'
