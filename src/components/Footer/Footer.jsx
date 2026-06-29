import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h4>David Clothings</h4>
          <p>Embrace the darkness. High quality streetwear inspired by the night.</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul className="footer-links">
            <li><a href="#">Search</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
            <button type="submit" className="btn newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}, David Clothings. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
