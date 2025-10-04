# Deployment script for Maps Jessindo - PowerShell version
# Auto pull, build, and restart PM2 with error handling

param(
    [switch]$Force
)

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json") -or -not (Test-Path "ecosystem.config.cjs")) {
    Write-Host "[ERROR] This script must be run from the maps-jessindo project directory" -ForegroundColor Red
    exit 1
}

try {
    Write-Host "[INFO] Step 1: Fetching latest changes from remote..." -ForegroundColor Cyan
    git fetch origin
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to fetch from remote repository"
    }

    # Check if there are changes to pull
    $local = git rev-parse HEAD
    $remote = git rev-parse origin/main

    if ($local -eq $remote -and -not $Force) {
        Write-Host "[WARNING] No new changes to deploy. Repository is up to date." -ForegroundColor Yellow
        exit 0
    }

    Write-Host "[INFO] Step 2: Pulling latest changes..." -ForegroundColor Cyan
    git pull origin main
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Git pull failed. Attempting to reset and retry..." -ForegroundColor Red

        Write-Host "[INFO] Step 2b: Stashing local changes..." -ForegroundColor Cyan
        git stash
        # stash returns 1 when no local changes, which is fine

        Write-Host "[INFO] Step 2c: Resetting to remote head..." -ForegroundColor Cyan
        git reset --hard origin/main
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to reset to remote head"
        }

        Write-Host "[INFO] Step 2d: Pulling again after reset..." -ForegroundColor Cyan
        git pull origin main
        if ($LASTEXITCODE -ne 0) {
            throw "Git pull still failed after reset. Manual intervention required."
        }

        Write-Host "[WARNING] Local changes were stashed. Use 'git stash pop' to restore if needed." -ForegroundColor Yellow
    }

    Write-Host "[INFO] Step 3: Installing dependencies..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to install dependencies"
    }

    Write-Host "[INFO] Step 4: Building application..." -ForegroundColor Cyan
    npm run build
    if ($LASTEXITCODE -ne 0) {
        throw "Build failed"
    }

    Write-Host "[INFO] Step 5: Restarting PM2 process..." -ForegroundColor Cyan
    pm2 restart maps-jessindo
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Failed to restart PM2 process" -ForegroundColor Red
        Write-Host "[WARNING] Attempting to start PM2 process..." -ForegroundColor Yellow
        pm2 start ecosystem.config.cjs
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to start PM2 process"
        }
    }

    Write-Host "[INFO] Step 6: Checking PM2 process status..." -ForegroundColor Cyan
    pm2 status maps-jessindo
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[WARNING] Could not check PM2 status, but deployment may still be successful" -ForegroundColor Yellow
    }

    Write-Host "[INFO] ✅ Deployment completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Deployment Summary:" -ForegroundColor White
    Write-Host "- Repository updated to latest version"
    Write-Host "- Dependencies installed"
    Write-Host "- Application built successfully"
    Write-Host "- PM2 process restarted"
    Write-Host ""
    Write-Host "To view logs: pm2 logs maps-jessindo"
    Write-Host "To monitor: pm2 monit"

} catch {
    Write-Host "[ERROR] Deployment failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Optional: Auto-exit after successful deployment
# Start-Sleep -Seconds 3