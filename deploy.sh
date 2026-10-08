#!/bin/bash
set -e

APP_DIR="/root/icodelabs-new"
APP_NAME="icodelabs"
LOG_FILE="/var/log/icodelabs-deploy.log"
LOCK_FILE="/tmp/icodelabs-deploy.lock"

exec 9>"$LOCK_FILE" || exit 1
flock -n 9 || {
  echo "🚫 Deployment already running"
  exit 0
}

exec > >(tee -a "$LOG_FILE") 2>&1

echo "=============================="
echo "🚀 Deployment started at $(date)"
echo "=============================="

cd "$APP_DIR"

echo "📥 Pulling latest code..."
git reset --hard
git pull origin production

echo "📦 Installing dependencies..."
yarn install --frozen-lockfile

echo "⚙️ Building app..."
NODE_OPTIONS="--max-old-space-size=2048" yarn build

echo "🔁 Reloading app with PM2..."
pm2 reload "$APP_NAME" --update-env

pm2 save

echo "✅ Deployment completed successfully at $(date)"