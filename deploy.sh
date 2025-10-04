#!/bin/bash

# Deployment script for Maps Jessindo
# Auto pull, build, and restart PM2 with error handling

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "ecosystem.config.cjs" ]; then
    print_error "This script must be run from the maps-jessindo project directory"
    exit 1
fi

print_status "Step 1: Fetching latest changes from remote..."
git fetch origin

if [ $? -ne 0 ]; then
    print_error "Failed to fetch from remote repository"
    exit 1
fi

# Check if there are changes to pull
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/$(git rev-parse --abbrev-ref HEAD))

if [ "$LOCAL" = "$REMOTE" ]; then
    print_warning "No new changes to deploy. Repository is up to date."
    exit 0
fi

print_status "Step 2: Pulling latest changes..."
git pull origin $(git rev-parse --abbrev-ref HEAD)

# Check if pull was successful
if [ $? -ne 0 ]; then
    print_error "Git pull failed. Attempting to reset and retry..."

    print_status "Step 2b: Stashing local changes..."
    git stash

    print_status "Step 2c: Resetting to remote head..."
    git reset --hard origin/$(git rev-parse --abbrev-ref HEAD)

    if [ $? -ne 0 ]; then
        print_error "Failed to reset to remote head"
        exit 1
    fi

    print_status "Step 2d: Pulling again after reset..."
    git pull origin $(git rev-parse --abbrev-ref HEAD)

    if [ $? -ne 0 ]; then
        print_error "Git pull still failed after reset. Manual intervention required."
        exit 1
    fi

    print_warning "Local changes were stashed. Use 'git stash pop' to restore if needed."
fi

print_status "Step 3: Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    print_error "Failed to install dependencies"
    exit 1
fi

print_status "Step 4: Building application..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Build failed"
    exit 1
fi

print_status "Step 5: Restarting PM2 process..."
pm2 restart maps-jessindo

if [ $? -ne 0 ]; then
    print_error "Failed to restart PM2 process"
    print_warning "Attempting to start PM2 process..."
    pm2 start ecosystem.config.cjs

    if [ $? -ne 0 ]; then
        print_error "Failed to start PM2 process"
        exit 1
    fi
fi

print_status "Step 6: Checking PM2 process status..."
pm2 status maps-jessindo

if [ $? -ne 0 ]; then
    print_warning "Could not check PM2 status, but deployment may still be successful"
fi

print_status "✅ Deployment completed successfully!"
echo ""
echo "Deployment Summary:"
echo "- Repository updated to latest version"
echo "- Dependencies installed"
echo "- Application built successfully"
echo "- PM2 process restarted"
echo ""
echo "To view logs: pm2 logs maps-jessindo"
echo "To monitor: pm2 monit"