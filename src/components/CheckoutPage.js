import React, { useState } from 'react';
import './CheckoutPage.css';

const SHIPPING_FEE = 15.00;

function CheckoutPage({ cart, updateQuantity, removeFromCart, getTotalPrice, goBack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const subtotal = getTotalPrice();
  const total = subtotal + SHIPPING_FEE;

  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  if (orderComplete) {
    return (
      <div className="checkout-page">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Order Successful!</h2>
          <p>Thank you for your purchase. Your order will be processed shortly.</p>
          <p className="order-number">Order #GO4P-{Math.floor(Math.random() * 100000)}</p>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <header className="checkout-header">
          <button className="back-btn" onClick={goBack}>
            ← Back to Shop
          </button>
          <h1>Checkout</h1>
        </header>
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <button className="continue-btn" onClick={goBack}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <button className="back-btn" onClick={goBack}>
          ← Back to Shop
        </button>
        <h1>Checkout</h1>
      </header>

      <div className="checkout-container">
        <div className="checkout-form">
          <form onSubmit={handleSubmit}>
            <section className="form-section">
              <h2>Contact Information</h2>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </section>

            <section className="form-section">
              <h2>Shipping Address</h2>
              <p className="shipping-notice">🇺🇸 USA Only - Standard Shipping $15</p>
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <div className="form-row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </section>

            <section className="form-section">
              <h2>Payment Information</h2>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                maxLength="16"
                required
              />
              <div className="form-row">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  maxLength="5"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  maxLength="3"
                  required
                />
              </div>
            </section>

            <button type="submit" className="submit-btn">
              Complete Purchase - ${total.toFixed(2)}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            ))}
          </div>
          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping (USA Only)</span>
              <span>${SHIPPING_FEE.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
