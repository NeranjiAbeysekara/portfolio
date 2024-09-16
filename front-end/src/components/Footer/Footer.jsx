import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>YourName</h3>
          <p>
            A passionate web developer creating modern, responsive websites with clean and efficient code.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aboutme'>About me</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
