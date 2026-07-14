"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch initial data
  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
      
    fetchProducts();
  }, []);

  // Fetch products based on category
  const fetchProducts = (cat = null) => {
    let url = '/api/products';
    if (cat) {
      url += `?category=${cat}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  const handleCategoryClick = (catId) => {
    if (activeCategory === catId) {
      setActiveCategory(null);
      fetchProducts();
    } else {
      setActiveCategory(catId);
      fetchProducts(catId);
    }
    // Scroll to products
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.qty + change;
          return { ...item, qty: newQty };
        }
        return item;
      }).filter(item => item.qty > 0);
    });
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);
  const cartItemsCount = cart.reduce((count, item) => count + item.qty, 0);

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order Placed Successfully! Your items will arrive soon.");
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <>
      <header>
        <button className="menu-btn mobile-only"><i className="ph ph-list"></i></button>
        <Link href="/" className="logo">
          <img className="logo-img" src="https://i.ibb.co/r2Lnw8pq/bac70c43-ddd2-4ce1-8eb7-ec417122b244.png" alt="Gaav Mart Logo" />
          Gaav <span>Mart</span>
        </Link>
        <nav className="desktop-nav">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </nav>
        <button className="cart-icon" onClick={() => setIsCartOpen(true)}>
          <i className="ph ph-shopping-cart"></i>
          {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
        </button>
      </header>

      <div className="mobile-search mobile-only">
        <i className="ph ph-magnifying-glass search-icon"></i>
        <input type="text" placeholder="Search for organic products..." />
      </div>

      <section className="hero">
        <div className="hero-content">
          <h1>Live Organic<br/><span>Live Healthy</span></h1>
          <p>Pure. Natural. You.</p>
          <a className="btn" href="#">Shop Now →</a>
        </div>
        <img src="https://i.ibb.co/ZzhmRqYx/image-removebg-preview.png" alt="Gaav Mart Organic Fresh Grocery Products" />
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon"><i className="ph ph-leaf"></i></div>
          <p>100%<br/>Organic</p>
        </div>
        <div className="feature">
          <div className="feature-icon"><i className="ph ph-plant"></i></div>
          <p>Fresh &<br/>Natural</p>
        </div>
        <div className="feature">
          <div className="feature-icon"><i className="ph ph-truck"></i></div>
          <p>Free Delivery<br/><span>Above ₹499</span></p>
        </div>
        <div className="feature">
          <div className="feature-icon"><i className="ph ph-shield-check"></i></div>
          <p>Secure<br/>Payment</p>
        </div>
      </section>

      <section className="section">
        <div className="title">
          <h2>Shop by Category</h2>
          <a href="#" className="view-all">View All</a>
        </div>
        <div className="categories">
          {categories.map(cat => (
            <div 
              key={cat.id} 
              className={`category ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat.id)}
            >
              <div className="cat-img-wrap"><img src={cat.image} alt={cat.name} /></div>
              <h4>{cat.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="products-section">
        <div className="title">
          <h2>
            {activeCategory 
              ? `${categories.find(c => c.id === activeCategory)?.name || ''} Products` 
              : 'Best Selling Products'}
          </h2>
          <a href="#" className="view-all">View All</a>
        </div>
        <div className="products">
          {products.map(product => {
            const cartItem = cart.find(item => item.id === product.id);
            const mrp = product.price + Math.floor(product.price * 0.2);
            return (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.weight}</p>
                <div className="price-container">
                  <div className="price-info">
                    <span className="price">₹{product.price}</span>
                    <span className="mrp">₹{mrp}</span>
                  </div>
                  {!cartItem ? (
                    <button className="buy" onClick={() => addToCart(product)}><i className="ph ph-plus"></i></button>
                  ) : (
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => updateQuantity(product.id, -1)}>-</button>
                      <span className="qty-val">{cartItem.qty}</span>
                      <button className="qty-btn" onClick={() => updateQuantity(product.id, 1)}>+</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <nav className="bottom-nav mobile-only">
        <a href="#" className="active"><i className="ph-fill ph-house"></i><span>Home</span></a>
        <a href="#"><i className="ph ph-squares-four"></i><span>Categories</span></a>
        <a href="#"><i className="ph ph-magnifying-glass"></i><span>Search</span></a>
        <a href="#"><i className="ph ph-shopping-bag"></i><span>Orders</span></a>
        <a href="#"><i className="ph ph-user"></i><span>Profile</span></a>
      </nav>

      <footer>
        © 2026 Gaav Mart | Fresh & Healthy Living
      </footer>

      {isCartOpen && (
        <div className="modal-overlay" onClick={(e) => e.target.classList.contains('modal-overlay') && setIsCartOpen(false)}>
          <div className="cart-modal">
            <div className="cart-header">
              <h2>My Cart</h2>
              <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
            </div>
            <div className="cart-items">
              {cart.length === 0 ? (
                <p style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>Your cart is empty.</p>
              ) : (
                cart.map(item => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                      <div className="cart-item-title">{item.name}</div>
                      <div className="cart-item-price">₹{item.price}</div>
                    </div>
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span className="qty-val">{item.qty}</span>
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>
                <button className="checkout-btn" onClick={checkout}>Proceed to Checkout</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
