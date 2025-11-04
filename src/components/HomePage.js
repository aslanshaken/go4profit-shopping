import React, { useState } from 'react';
import { products } from '../data/products';
import './HomePage.css';

function HomePage({ addToCart, cartCount, goToCheckout }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [notification, setNotification] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'drinkware', name: 'Drinkware' },
    { id: 'stationery', name: 'Stationery' },
    { id: 'bags', name: 'Bags' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(''), 2000);
  };

  return (
    <div className="home-page">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1>Go4Profit</h1>
            <p>Quality Merchandise</p>
          </div>
          <button className="cart-btn" onClick={goToCheckout}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 2L7 6H3L7 20H17L21 6H17L15 2H9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </header>

      {notification && (
        <div className="notification">{notification}</div>
      )}

      <section className="hero">
        <h2>Professional Bookkeeping Meets Quality Merchandise</h2>
        <p>Branded gear for your team and clients</p>
      </section>

      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="price">${product.price.toFixed(2)}</span>
                <button className="add-btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2025 Go4Profit. Professional Bookkeeping Services.</p>
      </footer>
    </div>
  );
}

export default HomePage;
