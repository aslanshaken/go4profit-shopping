import React from 'react';
import { Link } from 'react-router-dom';
import './PolicyPage.css';

function TermsOfService() {
  return (
    <div className="policy-page">
      <header className="page-header">
        <div className="header-content">
          <Link to="/" className="back-btn">
            ← Back to Shop
          </Link>
          <h1>Terms of Service</h1>
        </div>
      </header>

      <div className="policy-container">
        <div className="policy-content">
          <p className="last-updated">Last Updated: November 4, 2025</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the Go4Profit merchandise store, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2>2. Products and Services</h2>
            <p>Go4Profit offers branded merchandise including apparel, stationery, drinkware, bags, and accessories. All products are subject to availability.</p>
            <ul>
              <li>Product images are for illustration purposes and may vary slightly from actual items</li>
              <li>We reserve the right to modify product offerings and prices without prior notice</li>
              <li>All prices are in USD and include applicable taxes where required</li>
            </ul>
          </section>

          <section>
            <h2>3. Orders and Payment</h2>
            <h3>Order Placement</h3>
            <ul>
              <li>All orders are subject to acceptance and availability</li>
              <li>We reserve the right to refuse or cancel any order for any reason</li>
              <li>Order confirmation does not guarantee product availability</li>
            </ul>
            <h3>Payment</h3>
            <ul>
              <li>Payment is required at the time of order placement</li>
              <li>We accept major credit cards and debit cards</li>
              <li>All transactions are processed securely through our payment provider</li>
              <li>You are responsible for any applicable taxes and fees</li>
            </ul>
          </section>

          <section>
            <h2>4. Shipping and Delivery</h2>
            <ul>
              <li><strong>Shipping Area:</strong> We currently ship to addresses within the United States only</li>
              <li><strong>Shipping Fee:</strong> Standard shipping fee of $15.00 applies to all orders</li>
              <li><strong>Delivery Time:</strong> Orders typically arrive within 5-7 business days</li>
              <li><strong>Tracking:</strong> You will receive tracking information via email once your order ships</li>
              <li>Go4Profit is not responsible for delays caused by shipping carriers or incorrect addresses provided by customers</li>
            </ul>
          </section>

          <section>
            <h2>5. Returns and Refunds</h2>
            <h3>Return Policy</h3>
            <ul>
              <li>Returns accepted within 30 days of delivery</li>
              <li>Items must be unused, unworn, and in original condition with tags attached</li>
              <li>Customized or personalized items are non-returnable</li>
            </ul>
            <h3>Refund Process</h3>
            <ul>
              <li>Refunds will be processed to the original payment method</li>
              <li>Shipping fees are non-refundable</li>
              <li>Customer is responsible for return shipping costs unless the item is defective</li>
              <li>Refunds typically process within 5-10 business days after receiving the returned item</li>
            </ul>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>All content on this website, including the Go4Profit name, logo, designs, and product images, are the property of Go4Profit and are protected by copyright and trademark laws.</p>
            <ul>
              <li>You may not reproduce, distribute, or use our intellectual property without written permission</li>
              <li>Product purchases grant no rights to our trademarks or designs beyond personal use of the purchased item</li>
            </ul>
          </section>

          <section>
            <h2>7. User Conduct</h2>
            <p>When using our website, you agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Use the website for fraudulent purposes</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law:</p>
            <ul>
              <li>Go4Profit is not liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the amount paid for the product in question</li>
              <li>We are not responsible for website downtime, technical errors, or service interruptions</li>
            </ul>
          </section>

          <section>
            <h2>9. Disclaimer of Warranties</h2>
            <p>Our products and services are provided "as is" without warranties of any kind, either express or implied, including but not limited to:</p>
            <ul>
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
            </ul>
          </section>

          <section>
            <h2>10. Privacy</h2>
            <p>Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our data collection and use practices.</p>
          </section>

          <section>
            <h2>11. Modifications to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified terms.</p>
          </section>

          <section>
            <h2>12. Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2>13. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <div className="contact-box">
              <p><strong>Go4Profit</strong></p>
              <p>Email: legal@go4profit.com</p>
              <p>Support: hello@go4profit.us</p>
            </div>
          </section>

          <section>
            <h2>14. Severability</h2>
            <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
          </section>
        </div>
      </div>

      <footer className="page-footer">
        <p>&copy; 2025 Go4Profit. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default TermsOfService;
