import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SupportPage.css';

function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const mailtoLink = `mailto:hello@go4profit.us?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="support-page">
      <header className="page-header">
        <div className="header-content">
          <Link to="/" className="back-btn">
            ← Back to Shop
          </Link>
          <h1>Customer Support</h1>
        </div>
      </header>

      <div className="support-container">
        <div className="support-intro">
          <h2>How Can We Help You?</h2>
          <p>Have questions about our products or your order? We're here to help!</p>
          <div className="contact-info">
            <div className="info-item">
              <strong>Email:</strong> hello@go4profit.us
            </div>
            <div className="info-item">
              <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
            </div>
            <div className="info-item">
              <strong>Response Time:</strong> Within 24-48 hours
            </div>
          </div>
        </div>

        <div className="support-form-wrapper">
          <h3>Send Us a Message</h3>
          {submitted && (
            <div className="success-notification">
              Your message has been sent! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="support-form">
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Order inquiry, Product question, etc."
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Please describe your question or concern in detail..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="page-footer">
        <p>&copy; 2025 Go4Profit. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default SupportPage;
