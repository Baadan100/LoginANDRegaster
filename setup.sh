#!/bin/bash

# CodeCanyon Clone - Setup Script
# نسخة متطورة من موقع كود كانيون

echo "🚀 مرحباً بك في موقع كود كانيون المطور!"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ خطأ: لم يتم العثور على ملف index.html"
    echo "تأكد من تشغيل هذا السكريبت في مجلد المشروع"
    exit 1
fi

echo "✅ تم العثور على ملفات المشروع"

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to start server
start_server() {
    local cmd="$1"
    local port="$2"
    local name="$3"
    
    echo "🌐 بدء تشغيل الخادم باستخدام $name..."
    echo "📍 الرابط: http://localhost:$port"
    echo "⏹️  لإيقاف الخادم، اضغط Ctrl+C"
    echo ""
    eval "$cmd"
}

# Check for available servers and start the first one found
if command_exists python3; then
    start_server "python3 -m http.server 8000" "8000" "Python 3"
elif command_exists python; then
    start_server "python -m http.server 8000" "8000" "Python"
elif command_exists node && command_exists npx; then
    echo "📦 تثبيت serve إذا لم يكن مثبتاً..."
    npx serve . -p 8000
elif command_exists php; then
    start_server "php -S localhost:8000" "8000" "PHP"
else
    echo "⚠️  لم يتم العثور على خادم متاح"
    echo ""
    echo "يرجى تثبيت أحد الخيارات التالية:"
    echo "1. Python: https://www.python.org/downloads/"
    echo "2. Node.js: https://nodejs.org/"
    echo "3. PHP: https://www.php.net/downloads"
    echo ""
    echo "أو افتح ملف index.html مباشرة في المتصفح"
    
    # Try to open the file directly
    if command_exists xdg-open; then
        echo "🌐 محاولة فتح الملف مباشرة..."
        xdg-open index.html
    elif command_exists open; then
        echo "🌐 محاولة فتح الملف مباشرة..."
        open index.html
    elif command_exists start; then
        echo "🌐 محاولة فتح الملف مباشرة..."
        start index.html
    fi
fi