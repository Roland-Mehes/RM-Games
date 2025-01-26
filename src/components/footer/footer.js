import React from 'react';
import './footer.css';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Games with React .</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="www.linkedin.com/in/roland-mehes">
            <CiLinkedin size={25} />
          </a>
          <a href="https://github.com/Roland-Mehes">
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
