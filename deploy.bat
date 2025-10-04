@echo off
:: Deployment script for Maps Jessindo - Windows Server 2012
:: Auto pull, build, and restart PM2 with error handling

echo 🚀 Starting deployment process...

:: Set colors for output (Windows compatible)
set "INFO=[INFO]"
set "WARNING=[WARNING]"
set "ERROR=[ERROR]"

:: Function to check if command was successful
:check_success
if %errorlevel% neq 0 (
    echo %ERROR% %~1 failed
    goto :error_exit
)
goto :eof

:: Check if we're in the right directory
if not exist "package.json" (
    echo %ERROR% This script must be run from the maps-jessindo project directory
    pause
    exit /b 1
)

if not exist "ecosystem.config.cjs" (
    echo %ERROR% This script must be run from the maps-jessindo project directory
    pause
    exit /b 1
)

echo %INFO% Step 1: Fetching latest changes from remote...
git fetch origin
call :check_success "Git fetch"

:: Check if there are changes to pull
for /f "tokens=*" %%i in ('git rev-parse HEAD') do set LOCAL=%%i
for /f "tokens=*" %%i in ('git rev-parse origin/main') do set REMOTE=%%i

if "%LOCAL%"=="%REMOTE%" (
    echo %WARNING% No new changes to deploy. Repository is up to date.
    pause
    exit /b 0
)

echo %INFO% Step 2: Pulling latest changes...
git pull origin main
if %errorlevel% neq 0 (
    echo %ERROR% Git pull failed. Attempting to reset and retry...

    echo %INFO% Step 2b: Stashing local changes...
    git stash
    if %errorlevel% neq 1 (
        :: stash returns 1 when no local changes, which is fine
    )

    echo %INFO% Step 2c: Resetting to remote head...
    git reset --hard origin/main
    call :check_success "Git reset"

    echo %INFO% Step 2d: Pulling again after reset...
    git pull origin main
    call :check_success "Git pull after reset"

    echo %WARNING% Local changes were stashed. Use 'git stash pop' to restore if needed.
)

echo %INFO% Step 3: Installing dependencies...
npm install
call :check_success "npm install"

echo %INFO% Step 4: Building application...
npm run build
call :check_success "npm run build"

echo %INFO% Step 5: Restarting PM2 process...
pm2 restart maps-jessindo
if %errorlevel% neq 0 (
    echo %ERROR% Failed to restart PM2 process
    echo %WARNING% Attempting to start PM2 process...
    pm2 start ecosystem.config.cjs
    if %errorlevel% neq 0 (
        echo %ERROR% Failed to start PM2 process
        pause
        exit /b 1
    )
)

echo %INFO% Step 6: Checking PM2 process status...
pm2 status maps-jessindo
if %errorlevel% neq 0 (
    echo %WARNING% Could not check PM2 status, but deployment may still be successful
)

echo %INFO% ✅ Deployment completed successfully!
echo.
echo Deployment Summary:
echo - Repository updated to latest version
echo - Dependencies installed
echo - Application built successfully
echo - PM2 process restarted
echo.
echo To view logs: pm2 logs maps-jessindo
echo To monitor: pm2 monit
echo.
pause
exit /b 0

:error_exit
echo %ERROR% Deployment failed!
pause
exit /b 1