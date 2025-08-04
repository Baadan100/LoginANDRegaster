# موقع كود كانيون - نسخة مطورة 🚀

نسخة مطورة ومحسّنة من موقع CodeCanyon للسكريبت والإضافات البرمجية، مصممة بتقنيات الويب الحديثة مع دعم كامل للغة العربية.

## 📋 نظرة عامة

هذا المشروع هو إعادة تصميم وتطوير شامل لموقع CodeCanyon، يتضمن:

- **تصميم حديث ومتجاوب**: واجهة مستخدم عصرية تعمل على جميع الأجهزة
- **دعم اللغة العربية**: تصميم RTL كامل مع خطوط عربية جميلة
- **تفاعل متقدم**: JavaScript حديث للتفاعل والرسوم المتحركة
- **أداء محسّن**: تحميل سريع وتجربة مستخدم سلسة
- **إمكانية الوصول**: دعم كامل لمعايير الوصول للجميع

## 🏗️ هيكل المشروع

```
codecanyon-clone/
├── index.html          # الصفحة الرئيسية
├── styles.css          # ملف التنسيقات الرئيسي
├── script.js           # ملف JavaScript التفاعلي
├── README.md           # ملف التوثيق
└── assets/             # مجلد الأصول (اختياري)
    ├── images/         # الصور
    ├── icons/          # الأيقونات
    └── fonts/          # الخطوط المخصصة
```

## ✨ المميزات الرئيسية

### 🎨 التصميم والواجهة
- **تصميم RTL كامل** للغة العربية
- **واجهة متجاوبة** تعمل على الجوال والحاسوب
- **رسوم متحركة ناعمة** للتفاعل
- **نظام ألوان حديث** مع دعم الوضع المظلم
- **خطوط عربية جميلة** (Cairo Font)

### 🔍 وظائف البحث
- **بحث فوري** مع اقتراحات تلقائية
- **فلترة متقدمة** حسب الفئات
- **علامات شائعة** للبحث السريع
- **نتائج ديناميكية** مع تحديث فوري

### 📱 التنقل والقوائم
- **قائمة تنقل ذكية** مع قوائم فرعية
- **Mega Menu** للفئات الكبيرة
- **قائمة جوال** متجاوبة
- **تنقل لوحة المفاتيح** للوصول السهل

### 🛒 إدارة المنتجات
- **عرض المنتجات** بتصميم بطاقات جذاب
- **معاينة فورية** للمنتجات
- **نظام تقييم** بالنجوم
- **إحصائيات مبيعات** مفصلة

### 🎯 التفاعل والتجربة
- **رسوم متحركة CSS** للعناصر
- **تحميل تدريجي** للصور
- **إشعارات ذكية** للمستخدم
- **أزرار تفاعلية** مع ردود فعل بصرية

## 🛠️ التقنيات المستخدمة

### Frontend
- **HTML5**: بنية دلالية حديثة
- **CSS3**: تنسيقات متقدمة مع Flexbox & Grid
- **JavaScript ES6+**: برمجة تفاعلية حديثة
- **Font Awesome**: مكتبة أيقونات شاملة
- **Google Fonts**: خطوط عربية عالية الجودة

### المكتبات والأدوات
- **Intersection Observer API**: للرسوم المتحركة عند التمرير
- **Local Storage**: لحفظ بيانات المستخدم محلياً
- **CSS Custom Properties**: للمتغيرات الديناميكية
- **Media Queries**: للتصميم المتجاوب

## 🚀 تشغيل المشروع

### 1. تحميل المشروع
```bash
# نسخ المستودع
git clone https://github.com/your-username/codecanyon-clone.git

# الانتقال لمجلد المشروع
cd codecanyon-clone
```

### 2. تشغيل الموقع
#### الطريقة الأولى: خادم محلي بسيط
```bash
# باستخدام Python
python -m http.server 8000

# أو باستخدام Node.js
npx serve .

# أو باستخدام PHP
php -S localhost:8000
```

#### الطريقة الثانية: فتح مباشر
- افتح ملف `index.html` في المتصفح مباشرة

### 3. عرض الموقع
افتح المتصفح وانتقل إلى:
```
http://localhost:8000
```

## 🎨 تخصيص التصميم

### تغيير الألوان
في ملف `styles.css`، ابحث عن:
```css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --accent-color: #fbbf24;
  --text-color: #1e293b;
  --background-color: #f8fafc;
}
```

### إضافة خطوط مخصصة
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'YourFont', 'Cairo', sans-serif;
}
```

### تخصيص الرسوم المتحركة
```css
.custom-animation {
    animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## 🔧 الوظائف التفاعلية

### البحث والفلترة
```javascript
// إضافة وظيفة بحث مخصصة
function customSearch(query) {
    // منطق البحث المخصص
    console.log(`البحث عن: ${query}`);
}
```

### إدارة السلة
```javascript
// إضافة منتج للسلة
addToCart('product-123', 'اسم المنتج', 49.99);

// عرض محتويات السلة
function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    console.log('محتويات السلة:', cart);
}
```

### الإشعارات
```javascript
// عرض إشعار نجاح
showNotification('تم الحفظ بنجاح!', 'success');

// عرض إشعار خطأ
showNotification('حدث خطأ ما!', 'error');
```

## 📱 التوافق والدعم

### المتصفحات المدعومة
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### أحجام الشاشات
- 📱 **جوال**: 320px - 767px
- 📲 **تابلت**: 768px - 1023px
- 💻 **حاسوب**: 1024px - 1199px
- 🖥️ **شاشة كبيرة**: 1200px+

## 🎯 أفضل الممارسات

### الأداء
- **تحسين الصور**: استخدم تنسيقات WebP للصور
- **تصغير الملفات**: ضغط CSS و JavaScript
- **تحميل تدريجي**: للمحتوى والصور
- **Cache المتصفح**: لتحسين السرعة

### إمكانية الوصول
- **Alt text** لجميع الصور
- **ARIA labels** للعناصر التفاعلية
- **تنقل لوحة المفاتيح** كامل
- **تباين ألوان** مناسب

### SEO
- **Meta tags** محسّنة
- **عناوين دلالية** (H1, H2, H3)
- **Schema markup** للمنتجات
- **URLs نظيفة** وودية

## 🚀 التطوير المستقبلي

### مميزات مخططة
- [ ] **تسجيل دخول** ونظام المستخدمين
- [ ] **دفع إلكتروني** متكامل
- [ ] **لوحة تحكم** للبائعين
- [ ] **تطبيق جوال** مصاحب
- [ ] **API متكامل** للطرف الثالث

### تحسينات تقنية
- [ ] **Progressive Web App** (PWA)
- [ ] **Server-Side Rendering** (SSR)
- [ ] **TypeScript** للأمان التطويري
- [ ] **تقسيم الكود** لتحسين الأداء

## 🤝 المساهمة

نرحب بمساهماتكم! إليكم كيفية المساهمة:

### 1. Fork المشروع
```bash
git fork https://github.com/your-username/codecanyon-clone.git
```

### 2. إنشاء فرع جديد
```bash
git checkout -b feature/new-feature
```

### 3. تطبيق التغييرات
```bash
git commit -m "إضافة ميزة جديدة"
```

### 4. رفع التغييرات
```bash
git push origin feature/new-feature
```

### 5. إنشاء Pull Request
افتح Pull Request لمراجعة التغييرات.

## 📄 الرخصة

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 التواصل والدعم

### تواصل معنا
- 📧 **البريد الإلكتروني**: support@codecanyon-clone.com
- 💬 **ديسكورد**: [رابط الخادم](https://discord.gg/codecanyon-clone)
- 🐦 **تويتر**: [@codecanyon_clone](https://twitter.com/codecanyon_clone)

### الإبلاغ عن المشاكل
- استخدم [GitHub Issues](https://github.com/your-username/codecanyon-clone/issues) للإبلاغ عن الأخطاء
- قدم وصفاً مفصلاً للمشكلة مع خطوات إعادة الإنتاج

## 🙏 شكر خاص

- **CodeCanyon الأصلي** للإلهام والتصميم
- **مجتمع المطورين العرب** للدعم والمساهمة
- **Font Awesome** لمكتبة الأيقونات الرائعة
- **Google Fonts** للخطوط العربية الجميلة

---

<div align="center">

**صُنع بـ ❤️ للمجتمع العربي التقني**

[⭐ ضع نجمة](https://github.com/your-username/codecanyon-clone) | [🐛 بلّغ عن خطأ](https://github.com/your-username/codecanyon-clone/issues) | [💡 اقترح ميزة](https://github.com/your-username/codecanyon-clone/discussions)

</div>