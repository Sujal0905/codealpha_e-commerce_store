// Application Data
const PRODUCTS_DATA = [
    {
        "id": 1,
        "name": "Wireless Bluetooth Headphones",
        "category": "Electronics",
        "price": 79.99,
        "originalPrice": 99.99,
        "rating": 4.5,
        "reviews": 156,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        "images": [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
        ],
        "description": "Premium wireless Bluetooth headphones with noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals.",
        "features": ["Noise Cancellation", "30hr Battery", "Wireless Charging", "Voice Assistant"],
        "inStock": true,
        "stockCount": 25
    },
    {
        "id": 2,
        "name": "Smartphone 128GB",
        "category": "Electronics",
        "price": 599.99,
        "rating": 4.3,
        "reviews": 89,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        "images": [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400"
        ],
        "description": "Latest generation smartphone with advanced camera system, fast processor, and all-day battery life. Available in multiple colors.",
        "features": ["128GB Storage", "Triple Camera", "5G Ready", "Fast Charging"],
        "inStock": true,
        "stockCount": 15
    },
    {
        "id": 3,
        "name": "Casual Cotton T-Shirt",
        "category": "Clothing",
        "price": 24.99,
        "rating": 4.2,
        "reviews": 203,
        "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        "images": [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400"
        ],
        "description": "Comfortable 100% cotton t-shirt perfect for everyday wear. Soft fabric with a relaxed fit in various colors and sizes.",
        "features": ["100% Cotton", "Machine Washable", "Relaxed Fit", "Multiple Colors"],
        "inStock": true,
        "stockCount": 50
    },
    {
        "id": 4,
        "name": "Designer Jeans",
        "category": "Clothing",
        "price": 89.99,
        "originalPrice": 120.00,
        "rating": 4.4,
        "reviews": 167,
        "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        "images": [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
            "https://images.unsplash.com/photo-1606742880878-58216aca7b5c?w=400"
        ],
        "description": "Premium designer jeans with modern slim fit. Made from high-quality denim with stretch for comfort and durability.",
        "features": ["Slim Fit", "Stretch Denim", "Designer Brand", "Durable"],
        "inStock": true,
        "stockCount": 30
    },
    {
        "id": 5,
        "name": "Modern Coffee Table",
        "category": "Home & Garden",
        "price": 249.99,
        "rating": 4.6,
        "reviews": 78,
        "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
        "images": [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400"
        ],
        "description": "Sleek modern coffee table with glass top and wooden legs. Perfect centerpiece for contemporary living rooms.",
        "features": ["Glass Top", "Wooden Legs", "Modern Design", "Easy Assembly"],
        "inStock": true,
        "stockCount": 12
    },
    {
        "id": 6,
        "name": "Indoor Plant Set",
        "category": "Home & Garden",
        "price": 39.99,
        "rating": 4.7,
        "reviews": 234,
        "image": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
        "images": [
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
        ],
        "description": "Beautiful set of 3 easy-care indoor plants perfect for beginners. Includes decorative pots and care instructions.",
        "features": ["3 Plants Included", "Decorative Pots", "Easy Care", "Air Purifying"],
        "inStock": true,
        "stockCount": 40
    },
    {
        "id": 7,
        "name": "Fitness Resistance Bands",
        "category": "Sports",
        "price": 19.99,
        "rating": 4.3,
        "reviews": 312,
        "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        "images": [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
            "https://images.unsplash.com/photo-1544033527-b192daae7d36?w=400"
        ],
        "description": "Complete set of resistance bands for full-body workouts. Includes multiple resistance levels and workout guide.",
        "features": ["Multiple Resistance Levels", "Full Body Workout", "Portable", "Workout Guide"],
        "inStock": true,
        "stockCount": 75
    },
    {
        "id": 8,
        "name": "Yoga Mat Premium",
        "category": "Sports",
        "price": 34.99,
        "rating": 4.5,
        "reviews": 189,
        "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
        "images": [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
            "https://images.unsplash.com/photo-1506629905607-d405b7b2e8b8?w=400"
        ],
        "description": "High-quality non-slip yoga mat with excellent grip and cushioning. Perfect for all types of yoga and exercise.",
        "features": ["Non-Slip Surface", "Extra Cushioning", "Eco-Friendly", "Carrying Strap"],
        "inStock": true,
        "stockCount": 60
    },
    {
        "id": 9,
        "name": "JavaScript Programming Guide",
        "category": "Books",
        "price": 29.99,
        "rating": 4.8,
        "reviews": 445,
        "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
        "images": [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
        ],
        "description": "Comprehensive guide to modern JavaScript programming. Perfect for beginners and intermediate developers looking to enhance their skills.",
        "features": ["Beginner Friendly", "Practical Examples", "Latest ES6+", "Online Resources"],
        "inStock": true,
        "stockCount": 35
    },
    {
        "id": 10,
        "name": "Design Thinking Handbook",
        "category": "Books",
        "price": 34.99,
        "rating": 4.6,
        "reviews": 267,
        "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
        "images": [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400"
        ],
        "description": "Learn the principles and methods of design thinking to solve complex problems and drive innovation in any field.",
        "features": ["Innovation Methods", "Case Studies", "Practical Tools", "Expert Insights"],
        "inStock": true,
        "stockCount": 20
    }
];

const SHIPPING_OPTIONS = [
    {"name": "Standard Shipping", "price": 5.99, "days": "5-7 business days"},
    {"name": "Express Shipping", "price": 12.99, "days": "2-3 business days"},
    {"name": "Overnight", "price": 24.99, "days": "Next business day"}
];

const PAYMENT_METHODS = [
    {"name": "Credit Card", "icon": "💳"},
    {"name": "PayPal", "icon": "🅿️"},
    {"name": "Apple Pay", "icon": "🍎"},
    {"name": "Google Pay", "icon": "🔷"}
];

// Application State
class ShopState {
    constructor() {
        this.products = [...PRODUCTS_DATA];
        this.filteredProducts = [...PRODUCTS_DATA];
        this.cart = [];
        this.currentCategory = 'All';
        this.currentSort = 'default';
        this.searchQuery = '';
        this.selectedShipping = SHIPPING_OPTIONS[0];
        this.selectedPayment = PAYMENT_METHODS[0];
    }

    addToCart(productId, quantity = 1) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({...product, quantity});
        }
        this.updateCartUI();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCartUI();
    }

    updateCartQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item && quantity > 0) {
            item.quantity = quantity;
        } else if (item && quantity <= 0) {
            this.removeFromCart(productId);
        }
        this.updateCartUI();
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getCartItemCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    updateCartUI() {
        const cartCount = document.getElementById('cartCount');
        cartCount.textContent = this.getCartItemCount();
        this.renderCartItems();
    }

    filterProducts() {
        let filtered = [...this.products];

        // Filter by category
        if (this.currentCategory !== 'All') {
            filtered = filtered.filter(product => product.category === this.currentCategory);
        }

        // Filter by search query
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        }

        // Sort products
        switch (this.currentSort) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                filtered.sort((a, b) => b.id - a.id);
                break;
        }

        this.filteredProducts = filtered;
        this.renderProducts();
        this.updateResultsCount();
    }

    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        productsGrid.innerHTML = '';

        this.filteredProducts.forEach(product => {
            const productCard = this.createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product__card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product__image">
            <div class="product__content">
                <h3 class="product__name">${product.name}</h3>
                <div class="product__rating">
                    ${this.createRatingStars(product.rating)}
                    <span class="rating__reviews">(${product.reviews})</span>
                </div>
                <div class="product__price">
                    <span class="price__current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="price__original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product__actions">
                    <button class="btn btn--primary btn--add-cart" data-product-id="${product.id}">Add to Cart</button>
                    <button class="btn btn--view-details" data-product-id="${product.id}">View Details</button>
                </div>
            </div>
        `;

        // Add event listeners
        const addToCartBtn = card.querySelector('.btn--add-cart');
        const viewDetailsBtn = card.querySelector('.btn--view-details');

        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.addToCart(product.id);
            this.showNotification('Product added to cart!', 'success');
        });

        viewDetailsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showProductModal(product);
        });

        card.addEventListener('click', () => {
            this.showProductModal(product);
        });

        return card;
    }

    createRatingStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);

        let starsHTML = '<div class="rating">';
        
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<span class="rating__star">★</span>';
        }
        
        // Half star
        if (hasHalfStar) {
            starsHTML += '<span class="rating__star">★</span>';
        }
        
        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<span class="rating__star rating__star--empty">☆</span>';
        }
        
        starsHTML += '</div>';
        return starsHTML;
    }

    showProductModal(product) {
        const modal = document.getElementById('productModal');
        
        // Update modal content
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductImage').alt = product.name;
        document.getElementById('modalProductRating').innerHTML = this.createRatingStars(product.rating);
        document.getElementById('modalProductReviews').textContent = `(${product.reviews} reviews)`;
        document.getElementById('modalProductPrice').textContent = `$${product.price.toFixed(2)}`;
        
        const originalPriceEl = document.getElementById('modalProductOriginalPrice');
        if (product.originalPrice) {
            originalPriceEl.textContent = `$${product.originalPrice.toFixed(2)}`;
            originalPriceEl.classList.remove('hidden');
        } else {
            originalPriceEl.classList.add('hidden');
        }
        
        document.getElementById('modalProductDescription').innerHTML = `<p>${product.description}</p>`;
        
        // Update features
        const featuresEl = document.getElementById('modalProductFeatures');
        featuresEl.innerHTML = `
            <h5>Features:</h5>
            <div class="product__features">
                ${product.features.map(feature => `<span class="feature__tag">${feature}</span>`).join('')}
            </div>
        `;
        
        // Update thumbnails
        const thumbnailsEl = document.getElementById('modalProductThumbnails');
        thumbnailsEl.innerHTML = '';
        product.images.forEach((image, index) => {
            const thumb = document.createElement('img');
            thumb.src = image;
            thumb.alt = product.name;
            thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.addEventListener('click', () => {
                document.getElementById('modalProductImage').src = image;
                thumbnailsEl.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            thumbnailsEl.appendChild(thumb);
        });
        
        // Reset quantity
        document.getElementById('productQuantity').value = 1;
        
        // Store current product ID
        modal.dataset.productId = product.id;
        
        modal.classList.remove('hidden');
    }

    renderCartItems() {
        const cartItems = document.getElementById('cartItems');
        const cartEmpty = document.getElementById('cartEmpty');
        
        if (this.cart.length === 0) {
            cartItems.classList.add('hidden');
            cartEmpty.classList.remove('hidden');
            this.updateCartTotals();
            return;
        }
        
        cartItems.classList.remove('hidden');
        cartEmpty.classList.add('hidden');
        
        cartItems.innerHTML = '';
        
        this.cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart__item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart__item-image">
                <div class="cart__item-info">
                    <div class="cart__item-name">${item.name}</div>
                    <div class="cart__item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart__item-controls">
                        <div class="quantity__controls">
                            <button class="quantity__btn" data-action="decrease" data-product-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity__btn" data-action="increase" data-product-id="${item.id}">+</button>
                        </div>
                        <button class="cart__item-remove" data-product-id="${item.id}">Remove</button>
                    </div>
                </div>
            `;
            
            // Add event listeners
            const decreaseBtn = cartItem.querySelector('[data-action="decrease"]');
            const increaseBtn = cartItem.querySelector('[data-action="increase"]');
            const removeBtn = cartItem.querySelector('.cart__item-remove');
            
            decreaseBtn.addEventListener('click', () => {
                this.updateCartQuantity(item.id, item.quantity - 1);
            });
            
            increaseBtn.addEventListener('click', () => {
                this.updateCartQuantity(item.id, item.quantity + 1);
            });
            
            removeBtn.addEventListener('click', () => {
                this.removeFromCart(item.id);
                this.showNotification('Item removed from cart', 'info');
            });
            
            cartItems.appendChild(cartItem);
        });
        
        this.updateCartTotals();
    }

    updateCartTotals() {
        const subtotal = this.getCartTotal();
        const tax = subtotal * 0.08; // 8% tax
        const total = subtotal + tax;
        
        document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
    }

    updateResultsCount() {
        const count = this.filteredProducts.length;
        document.getElementById('resultsCount').textContent = `${count} product${count !== 1 ? 's' : ''} found`;
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification__close">×</button>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-base);
            padding: var(--space-12) var(--space-16);
            box-shadow: var(--shadow-lg);
            z-index: 2000;
            display: flex;
            align-items: center;
            gap: var(--space-12);
            min-width: 250px;
            animation: slideIn 0.3s ease-out;
        `;
        
        // Add type-specific styles
        if (type === 'success') {
            notification.style.borderColor = 'var(--color-success)';
            notification.style.backgroundColor = 'rgba(var(--color-success-rgb), 0.1)';
        } else if (type === 'error') {
            notification.style.borderColor = 'var(--color-error)';
            notification.style.backgroundColor = 'rgba(var(--color-error-rgb), 0.1)';
        }
        
        // Add close functionality
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            cursor: pointer;
            font-size: 18px;
            color: var(--color-text-secondary);
        `;
        
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }
}

// Initialize the application
const shop = new ShopState();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    shop.renderProducts();
    shop.updateResultsCount();
    
    // Navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
    
    // Navigation category links
    const navLinks = document.querySelectorAll('.nav__list a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            shop.currentCategory = category;
            shop.filterProducts();
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            navList.classList.remove('open');
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', () => {
        shop.searchQuery = searchInput.value.trim();
        shop.filterProducts();
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            shop.searchQuery = searchInput.value.trim();
            shop.filterProducts();
        }
    });
    
    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.addEventListener('change', () => {
        shop.currentCategory = categoryFilter.value;
        shop.filterProducts();
    });
    
    // Sort filter
    const sortFilter = document.getElementById('sortFilter');
    sortFilter.addEventListener('change', () => {
        shop.currentSort = sortFilter.value;
        shop.filterProducts();
    });
    
    // Shop now button
    const shopNowBtn = document.getElementById('shopNowBtn');
    shopNowBtn.addEventListener('click', () => {
        document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Cart modal
    const cartToggle = document.getElementById('cartToggle');
    const cartModal = document.getElementById('cartModal');
    const cartClose = document.getElementById('cartClose');
    const continueShopping = document.getElementById('continueShopping');
    
    cartToggle.addEventListener('click', () => {
        shop.renderCartItems();
        cartModal.classList.remove('hidden');
    });
    
    cartClose.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });
    
    continueShopping.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });
    
    // Product modal
    const productModal = document.getElementById('productModal');
    const productClose = document.getElementById('productClose');
    const quantityMinus = document.getElementById('quantityMinus');
    const quantityPlus = document.getElementById('quantityPlus');
    const productQuantity = document.getElementById('productQuantity');
    const addToCartModal = document.getElementById('addToCartModal');
    
    productClose.addEventListener('click', () => {
        productModal.classList.add('hidden');
    });
    
    quantityMinus.addEventListener('click', () => {
        const current = parseInt(productQuantity.value);
        if (current > 1) {
            productQuantity.value = current - 1;
        }
    });
    
    quantityPlus.addEventListener('click', () => {
        const current = parseInt(productQuantity.value);
        if (current < 10) {
            productQuantity.value = current + 1;
        }
    });
    
    addToCartModal.addEventListener('click', () => {
        const productId = parseInt(productModal.dataset.productId);
        const quantity = parseInt(productQuantity.value);
        shop.addToCart(productId, quantity);
        productModal.classList.add('hidden');
        shop.showNotification(`Added ${quantity} item(s) to cart!`, 'success');
    });
    
    // Checkout modal
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutClose = document.getElementById('checkoutClose');
    const backToCart = document.getElementById('backToCart');
    const checkoutForm = document.getElementById('checkoutForm');
    
    checkoutBtn.addEventListener('click', () => {
        if (shop.cart.length === 0) {
            shop.showNotification('Your cart is empty!', 'error');
            return;
        }
        
        cartModal.classList.add('hidden');
        setupCheckoutModal();
        checkoutModal.classList.remove('hidden');
    });
    
    checkoutClose.addEventListener('click', () => {
        checkoutModal.classList.add('hidden');
    });
    
    backToCart.addEventListener('click', () => {
        checkoutModal.classList.add('hidden');
        cartModal.classList.remove('hidden');
    });
    
    // Order confirmation modal
    const confirmationModal = document.getElementById('confirmationModal');
    const confirmationClose = document.getElementById('confirmationClose');
    const continueBrowsing = document.getElementById('continueBrowsing');
    
    confirmationClose.addEventListener('click', () => {
        confirmationModal.classList.add('hidden');
    });
    
    continueBrowsing.addEventListener('click', () => {
        confirmationModal.classList.add('hidden');
        shop.cart = [];
        shop.updateCartUI();
    });
    
    // Checkout form submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Generate order number
        const orderNumber = '#' + Math.random().toString(36).substr(2, 9).toUpperCase();
        const total = shop.getCartTotal() + (shop.getCartTotal() * 0.08) + shop.selectedShipping.price;
        
        // Update confirmation modal
        document.getElementById('orderNumber').textContent = orderNumber;
        document.getElementById('orderTotal').textContent = `$${total.toFixed(2)}`;
        document.getElementById('estimatedDelivery').textContent = shop.selectedShipping.days;
        
        // Show confirmation
        checkoutModal.classList.add('hidden');
        confirmationModal.classList.remove('hidden');
    });
    
    // Close modals when clicking backdrop
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__backdrop')) {
                modal.classList.add('hidden');
            }
        });
    });
});

// Setup checkout modal
function setupCheckoutModal() {
    // Setup shipping options
    const shippingOptions = document.getElementById('shippingOptions');
    shippingOptions.innerHTML = '';
    
    SHIPPING_OPTIONS.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = `shipping__option ${index === 0 ? 'selected' : ''}`;
        optionEl.innerHTML = `
            <div>
                <input type="radio" name="shipping" value="${index}" ${index === 0 ? 'checked' : ''}>
                <span>${option.name}</span>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">${option.days}</div>
            </div>
            <span>$${option.price.toFixed(2)}</span>
        `;
        
        optionEl.addEventListener('click', () => {
            document.querySelectorAll('.shipping__option').forEach(o => o.classList.remove('selected'));
            optionEl.classList.add('selected');
            optionEl.querySelector('input').checked = true;
            shop.selectedShipping = option;
            updateCheckoutTotals();
        });
        
        shippingOptions.appendChild(optionEl);
    });
    
    // Setup payment methods
    const paymentMethods = document.getElementById('paymentMethods');
    paymentMethods.innerHTML = '';
    
    PAYMENT_METHODS.forEach((method, index) => {
        const methodEl = document.createElement('div');
        methodEl.className = `payment__method ${index === 0 ? 'selected' : ''}`;
        methodEl.innerHTML = `
            <div>
                <input type="radio" name="payment" value="${index}" ${index === 0 ? 'checked' : ''}>
                <span>${method.icon} ${method.name}</span>
            </div>
        `;
        
        methodEl.addEventListener('click', () => {
            document.querySelectorAll('.payment__method').forEach(m => m.classList.remove('selected'));
            methodEl.classList.add('selected');
            methodEl.querySelector('input').checked = true;
            shop.selectedPayment = method;
        });
        
        paymentMethods.appendChild(methodEl);
    });
    
    // Setup order items
    const checkoutItems = document.getElementById('checkoutItems');
    checkoutItems.innerHTML = '';
    
    shop.cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'summary__item';
        itemEl.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        checkoutItems.appendChild(itemEl);
    });
    
    updateCheckoutTotals();
}

function updateCheckoutTotals() {
    const subtotal = shop.getCartTotal();
    const shipping = shop.selectedShipping.price;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutShipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);