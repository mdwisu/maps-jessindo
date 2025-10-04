@echo off
echo Starting simple deployment...

:: Check if required files exist
if not exist "package.json" (
    echo ERROR: package.json not found
    pause
    exit /b 1
)

echo Step 1: Git fetch...
git fetch origin
echo Git fetch result: %errorlevel%

echo Step 2: Git pull...
git pull origin main
echo Git pull result: %errorlevel%

echo Step 3: Install dependencies...
npm install
echo npm install result: %errorlevel%

echo Step 4: Build...
npm run build
echo npm build result: %errorlevel%

echo Step 5: Restart PM2...
pm2 restart maps-jessindo
echo PM2 restart result: %errorlevel%

echo Deployment completed!
pause