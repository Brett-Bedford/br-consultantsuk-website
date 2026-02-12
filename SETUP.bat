@echo off
echo ========================================
echo BR Consultants UK Website Setup
echo ========================================
echo.
echo This script will install all dependencies
echo and start your website.
echo.
echo Please wait...
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: npm install failed!
    echo Make sure Node.js is installed from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo IMPORTANT: Make sure you have added ranjit.jpg
echo to the public folder!
echo.
echo Starting development server...
echo.

REM Start the development server
call npm run dev

pause
