import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>PawFinder</h2>
        <p>
          PawFinder is your trusted companion in helping adorable pets find loving homes.
          A full-stack adoption platform to connect humans and furry friends.
        </p>
        <div className="footer-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>

      
      

      <div className="footer-bottom">
        <hr />
        <p>     Copyright 2025 &copy; PawFinder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;