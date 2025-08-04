@echo off
chcp 65001 >nul
title CodeCanyon Clone - Setup

echo 🚀 مرحباً بك في موقع كود كانيون المطور!
echo ==============================================
echo.

REM Check if we're in the right directory
if not exist "index.html" (
    echo ❌ خطأ: لم يتم العثور على ملف index.html
    echo تأكد من تشغيل هذا السكريبت في مجلد المشروع
    pause
    exit /b 1
)

echo ✅ تم العثور على ملفات المشروع
echo.

REM Check for Python 3
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo 🌐 بدء تشغيل الخادم باستخدام Python...
    echo 📍 الرابط: http://localhost:8000
    echo ⏹️  لإيقاف الخادم، اضغط Ctrl+C
    echo.
    python -m http.server 8000
    goto :end
)

REM Check for Node.js
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo 📦 تثبيت serve إذا لم يكن مثبتاً...
    echo 🌐 بدء تشغيل الخادم باستخدام Node.js...
    echo 📍 الرابط: http://localhost:8000
    echo ⏹️  لإيقاف الخادم، اضغط Ctrl+C
    echo.
    npx serve . -p 8000
    goto :end
)

REM Check for PHP
php --version >nul 2>&1
if %errorlevel% == 0 (
    echo 🌐 بدء تشغيل الخادم باستخدام PHP...
    echo 📍 الرابط: http://localhost:8000
    echo ⏹️  لإيقاف الخادم، اضغط Ctrl+C
    echo.
    php -S localhost:8000
    goto :end
)

REM No server found
echo ⚠️  لم يتم العثور على خادم متاح
echo.
echo يرجى تثبيت أحد الخيارات التالية:
echo 1. Python: https://www.python.org/downloads/
echo 2. Node.js: https://nodejs.org/
echo 3. PHP: https://www.php.net/downloads
echo.
echo أو افتح ملف index.html مباشرة في المتصفح
echo.

REM Try to open the file directly
echo 🌐 محاولة فتح الملف مباشرة...
start index.html

:end
pause