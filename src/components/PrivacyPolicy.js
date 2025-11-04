import React from 'react';
import { Link } from 'react-router-dom';
import './PolicyPage.css';

function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <header className="page-header">
        <div className="header-content">
          <Link to="/" className="back-btn">
            ← Back to Shop
          </Link>
          <h1>Privacy Policy</h1>
        </div>
      </header>

      <div className="policy-container">
        <div className="policy-content">
          <p className="last-updated">Last Updated: November 4, 2025</p>

          <section>
            <h2>1. Information We Collect</h2>
            <p>Go4Profit collects the following types of information when you use our online merchandise store:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and shipping address provided during checkout.</li>
              <li><strong>Payment Information:</strong> Credit card details and billing address (processed securely through our payment processor).</li>
              <li><strong>Order Information:</strong> Products purchased, order history, and transaction details.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies for website functionality.</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>Processing and fulfilling your merchandise orders</li>
              <li>Communicating order confirmations, shipping updates, and delivery notifications</li>
              <li>Providing customer support and responding to inquiries</li>
              <li>Improving our products and website experience</li>
              <li>Preventing fraud and ensuring transaction security</li>
              <li>Complying with legal obligations and enforcing our terms</li>
            </ul>
          </section>

          <section>
            <h2>3. Information Sharing and Disclosure</h2>
            <p>We may share your information with the following parties:</p>
            <ul>
              <li><strong>Service Providers:</strong> Shipping companies, payment processors, and fulfillment partners necessary to complete your order.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of company assets.</li>
            </ul>
            <p><strong>We do not sell or rent your personal information to third parties for marketing purposes.</strong></p>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information:</p>
            <ul>
              <li>SSL encryption for all data transmission</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Regular security audits and updates</li>
              <li>Restricted access to personal information by authorized personnel only</li>
              <li>Secure data storage with backup systems</li>
            </ul>
          </section>

          <section>
            <h2>5. Cookies and Tracking</h2>
            <p>Our website uses cookies to:</p>
            <ul>
              <li>Maintain your shopping cart during your session</li>
              <li>Remember your preferences</li>
              <li>Analyze website traffic and user behavior</li>
            </ul>
            <p>You can control cookies through your browser settings, though some features may not function properly without them.</p>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2>7. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul>
              <li>Fulfill the purposes described in this policy</li>
              <li>Comply with legal, accounting, or reporting requirements</li>
              <li>Resolve disputes and enforce our agreements</li>
            </ul>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last Updated" date.</p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="contact-box">
              <p><strong>Go4Profit</strong></p>
              <p>Email: hello@go4profit.us</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="page-footer">
        <p>&copy; 2025 Go4Profit. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
