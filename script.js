// DOM Elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navCategories = document.querySelector('.nav-categories');
const searchForms = document.querySelectorAll('.search-form');
const tabButtons = document.querySelectorAll('.tab-btn');
const productCards = document.querySelectorAll('.product-card');
const categoryCards = document.querySelectorAll('.category-card');

// Mobile Menu Toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        navCategories.classList.toggle('mobile-active');
        mobileMenuToggle.classList.toggle('active');
        
        // Toggle hamburger animation
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (mobileMenuToggle.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translateY(7px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-7px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    });
}

// Add mobile styles for navigation
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-categories.mobile-active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            right: 0;
            left: 0;
            background: white;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            padding: 20px;
            z-index: 1000;
            gap: 15px;
        }
        
        .nav-categories .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: 1px solid #e2e8f0;
            margin-top: 10px;
        }
    }
`;
document.head.appendChild(style);

// Search Functionality
searchForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInput = this.querySelector('input[type="text"]');
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm) {
            performSearch(searchTerm);
        }
    });
});

function performSearch(term) {
    // Add loading state
    const searchButton = document.querySelector('.search-button') || document.querySelector('.search-btn');
    const originalContent = searchButton.innerHTML;
    searchButton.innerHTML = '<div class="loading"></div>';
    
    // Simulate search (in real app, this would be an API call)
    setTimeout(() => {
        searchButton.innerHTML = originalContent;
        showSearchResults(term);
    }, 1000);
}

function showSearchResults(term) {
    // In a real application, this would navigate to a search results page
    // For now, we'll just show a simple alert
    const resultCount = Math.floor(Math.random() * 500) + 50;
    alert(`تم العثور على ${resultCount} نتيجة للبحث عن: "${term}"`);
}

// Tab Functionality for Featured Products
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Get tab content
        const tabName = this.getAttribute('data-tab');
        switchProductTab(tabName);
    });
});

function switchProductTab(tabName) {
    const productsGrid = document.querySelector('.products-grid');
    
    // Add loading animation
    productsGrid.style.opacity = '0.5';
    
    setTimeout(() => {
        // In a real app, this would load different products based on the tab
        // For now, we'll just shuffle the existing products
        const productCards = Array.from(productsGrid.children);
        shuffleArray(productCards);
        
        // Clear and re-append
        productsGrid.innerHTML = '';
        productCards.forEach(card => {
            card.classList.add('fade-in');
            productsGrid.appendChild(card);
        });
        
        productsGrid.style.opacity = '1';
    }, 300);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Product Card Interactions
productCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking on preview button
        if (e.target.classList.contains('btn-preview')) return;
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // In a real app, this would navigate to the product page
        const productTitle = this.querySelector('.product-title').textContent;
        showProductDetails(productTitle);
    });
});

// Preview Button Functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-preview')) {
        e.preventDefault();
        e.stopPropagation();
        
        const productCard = e.target.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;
        
        // Add loading state
        const originalText = e.target.textContent;
        e.target.innerHTML = '<div class="loading"></div>';
        
        setTimeout(() => {
            e.target.textContent = originalText;
            openPreview(productTitle);
        }, 1000);
    }
});

function showProductDetails(title) {
    // In a real app, this would navigate to the product page
    alert(`فتح صفحة المنتج: ${title}`);
}

function openPreview(title) {
    // In a real app, this would open a preview modal or new tab
    alert(`فتح معاينة مباشرة للمنتج: ${title}`);
}

// Category Card Interactions
categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const categoryTitle = this.querySelector('.category-title').textContent;
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // In a real app, this would navigate to the category page
        showCategoryProducts(categoryTitle);
    });
});

function showCategoryProducts(category) {
    // In a real app, this would navigate to a category page
    alert(`تصفح منتجات فئة: ${category}`);
}

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy Loading for Images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Add to Cart Functionality
function addToCart(productId, productTitle, price) {
    // Get current cart count
    const cartCountElement = document.querySelector('.cart-count');
    let currentCount = parseInt(cartCountElement.textContent) || 0;
    
    // Update cart count
    cartCountElement.textContent = currentCount + 1;
    
    // Add animation to cart icon
    const cartLink = document.querySelector('.cart-link');
    cartLink.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartLink.style.transform = '';
    }, 200);
    
    // Show success message
    showNotification(`تم إضافة "${productTitle}" إلى السلة`, 'success');
    
    // Store in localStorage (in real app, this would sync with backend)
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({
        id: productId,
        title: productTitle,
        price: price,
        quantity: 1,
        addedAt: new Date().toISOString()
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        left: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateY(-100px)',
        transition: 'transform 0.3s ease',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
    });
    
    // Set background color based on type
    const colors = {
        success: '#059669',
        error: '#dc2626',
        warning: '#f59e0b',
        info: '#4f46e5'
    };
    notification.style.backgroundColor = colors[type];
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(-100px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Popular Search Tags Functionality
document.querySelectorAll('.popular-tag').forEach(tag => {
    tag.addEventListener('click', function(e) {
        e.preventDefault();
        const searchTerm = this.textContent;
        
        // Fill search inputs with the tag text
        document.querySelectorAll('input[type="text"]').forEach(input => {
            if (input.placeholder.includes('ابحث')) {
                input.value = searchTerm;
            }
        });
        
        // Perform search
        performSearch(searchTerm);
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
Object.assign(scrollToTopBtn.style, {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#4f46e5',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    zIndex: '1000',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(79, 70, 229, 0.3)'
});

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Load cart count from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
    
    // Add animation classes to elements as they come into view
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    
    // Observe elements for animation
    document.querySelectorAll('.category-card, .product-card').forEach(el => {
        animateObserver.observe(el);
    });
});

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        if (navCategories && navCategories.classList.contains('mobile-active')) {
            mobileMenuToggle.click();
        }
    }
    
    // Enter key on focused elements
    if (e.key === 'Enter') {
        const focused = document.activeElement;
        if (focused.classList.contains('category-card')) {
            focused.click();
        }
        if (focused.classList.contains('product-card')) {
            focused.click();
        }
    }
});

// Make cards focusable for accessibility
document.querySelectorAll('.category-card, .product-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
});

// Search suggestions (mock data)
const searchSuggestions = [
    'Laravel CMS',
    'WordPress Plugins',
    'React Components',
    'PHP Scripts',
    'JavaScript Libraries',
    'CSS Frameworks',
    'Mobile Apps',
    'AI Tools',
    'E-commerce Solutions',
    'Admin Templates'
];

// Add search autocomplete
document.querySelectorAll('input[type="text"]').forEach(input => {
    if (input.placeholder.includes('ابحث')) {
        let suggestionBox = null;
        
        input.addEventListener('input', function() {
            const value = this.value.toLowerCase();
            
            // Remove existing suggestions
            if (suggestionBox) {
                suggestionBox.remove();
                suggestionBox = null;
            }
            
            if (value.length > 1) {
                const matches = searchSuggestions.filter(suggestion => 
                    suggestion.toLowerCase().includes(value)
                );
                
                if (matches.length > 0) {
                    suggestionBox = createSuggestionBox(matches, input);
                }
            }
        });
        
        // Close suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (suggestionBox && !suggestionBox.contains(e.target) && e.target !== input) {
                suggestionBox.remove();
                suggestionBox = null;
            }
        });
    }
});

function createSuggestionBox(suggestions, input) {
    const box = document.createElement('div');
    box.className = 'search-suggestions';
    Object.assign(box.style, {
        position: 'absolute',
        top: '100%',
        right: '0',
        left: '0',
        background: '#fff',
        border: '1px solid #e2e8f0',
        borderTop: 'none',
        borderRadius: '0 0 8px 8px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        zIndex: '1000',
        maxHeight: '200px',
        overflowY: 'auto'
    });
    
    suggestions.slice(0, 5).forEach(suggestion => {
        const item = document.createElement('div');
        item.textContent = suggestion;
        item.style.cssText = `
            padding: 12px 15px;
            cursor: pointer;
            border-bottom: 1px solid #f1f5f9;
            transition: background-color 0.2s ease;
        `;
        
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8fafc';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
        
        item.addEventListener('click', function() {
            input.value = suggestion;
            box.remove();
            performSearch(suggestion);
        });
        
        box.appendChild(item);
    });
    
    // Position relative to input's container
    const container = input.closest('.search-container') || input.closest('.search-box');
    if (container) {
        container.style.position = 'relative';
        container.appendChild(box);
    }
    
    return box;
}

// Performance monitoring (optional)
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`Page loaded in ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
        }, 0);
    });
}

console.log('CodeCanyon Clone - JavaScript loaded successfully! 🚀');