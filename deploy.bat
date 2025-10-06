@echo off
:: Deployment script for Maps Jessindo - Windows Server 2012
:: Auto pull, build, and restart PM2 with error handling

echo ============================================
echo   Maps Jessindo Deployment Script
echo ============================================
echo Started at: %date% %time%
echo.

:: Check if we're in the right directory
if not exist "package.json" (
    echo [ERROR] This script must be run from the maps-jessindo project directory
    pause
    exit /b 1
)

if not exist "ecosystem.config.cjs" (
    echo [ERROR] This script must be run from the maps-jessindo project directory
    pause
    exit /b 1
)

echo [INFO] Step 1/6: Fetching latest changes from remote...
git fetch origin
if %errorlevel% neq 0 (
    echo [ERROR] Git fetch failed
    pause
    exit /b 1
)

:: Check if there are changes to pull
setlocal enabledelayedexpansion
for /f "delims=" %%i in ('git rev-parse HEAD 2^>nul') do set LOCAL=%%i
for /f "delims=" %%i in ('git rev-parse origin/main 2^>nul') do set REMOTE=%%i

if "!LOCAL!"=="!REMOTE!" (
    echo [WARNING] No new changes to deploy. Repository is up to date.
    echo [INFO] Deployment skipped. Exiting...
    timeout /t 3 /nobreak >nul
    exit /b 0
)

echo [INFO] Step 2/6: Pulling latest changes...
echo [DEBUG] Running: git pull origin main
git pull origin main
if %errorlevel% neq 0 (
    echo [ERROR] Git pull failed. Attempting to reset and retry...

    echo [INFO] Step 2b: Stashing local changes...
    git stash

    echo [INFO] Step 2c: Resetting to remote head...
    git reset --hard origin/main
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to reset to remote head
        pause
        exit /b 1
    )

    echo [INFO] Step 2d: Pulling again after reset...
    git pull origin main
    if %errorlevel% neq 0 (
        echo [ERROR] Git pull still failed after reset. Manual intervention required.
        pause
        exit /b 1
    )

    echo [WARNING] Local changes were stashed. Use 'git stash pop' to restore if needed.
)
echo [SUCCESS] Git pull completed
echo.

echo [INFO] Step 3/6: Installing dependencies...
echo [DEBUG] Running: npm install --loglevel=error
call npm install --loglevel=error
set INSTALL_ERROR=%errorlevel%
echo [DEBUG] npm install exit code: %INSTALL_ERROR%
if %INSTALL_ERROR% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [SUCCESS] Dependencies installed
echo.

echo [INFO] Step 4/6: Building application...
echo [DEBUG] Running: npm run build
call npm run build
set BUILD_ERROR=%errorlevel%
echo [DEBUG] npm build exit code: %BUILD_ERROR%
if %BUILD_ERROR% neq 0 (
    echo [ERROR] Build failed
    pause
    exit /b 1
)
echo [SUCCESS] Build completed
echo.

echo [INFO] Step 5/6: Restarting PM2 process...
echo [DEBUG] Running: pm2 restart maps-jessindo
call pm2 restart maps-jessindo
set PM2_ERROR=%errorlevel%
echo [DEBUG] pm2 restart exit code: %PM2_ERROR%
if %PM2_ERROR% neq 0 (
    echo [WARNING] Failed to restart PM2 process
    echo [INFO] Attempting to start PM2 process...
    call pm2 start ecosystem.config.cjs
    set PM2_START_ERROR=%errorlevel%
    echo [DEBUG] pm2 start exit code: %PM2_START_ERROR%
    if %PM2_START_ERROR% neq 0 (
        echo [ERROR] Failed to start PM2 process
        pause
        exit /b 1
    )
    echo [SUCCESS] PM2 process started
) else (
    echo [SUCCESS] PM2 process restarted
)
echo.

echo [INFO] Step 6/6: Checking PM2 process status...
echo [DEBUG] Running: pm2 list
call pm2 list
echo.

echo ============================================
echo   DEPLOYMENT COMPLETED SUCCESSFULLY!
echo ============================================
echo Finished at: %date% %time%
echo.
echo Summary:
echo  - Repository updated to latest version
echo  - Dependencies installed
echo  - Application built successfully
echo  - PM2 process restarted
echo.
echo Useful commands:
echo  - View logs:    pm2 logs maps-jessindo
echo  - Monitor:      pm2 monit
echo  - Stop:         pm2 stop maps-jessindo
echo  - Restart:      pm2 restart maps-jessindo
echo.
echo Deployment will auto-close in 5 seconds...
timeout /t 5 /nobreak >nul
exit /b 0