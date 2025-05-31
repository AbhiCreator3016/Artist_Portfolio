
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-serif font-bold mb-4 block">
              <span className="text-white">Artisan</span>
              <span className="text-accent">Gallery</span>
            </span>
            <p className="text-gray-300 mb-4">
              Showcasing exceptional fine art that captures the essence of beauty, emotion, and human experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@artisangallery.com" className="text-gray-300 hover:text-accent transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-medium mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About</Link>
              </li>
              <li>
                <Link to="/exhibitions" className="text-gray-300 hover:text-accent transition-colors">Exhibitions</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-medium mb-4 block">Visit Us</span>
            <address className="text-gray-300 not-italic">
              <p>123 Art District</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">Open Tuesday - Sunday</p>
              <p>10:00 AM - 6:00 PM</p>
              <p className="mt-2">
                <a href="tel:+12125551234" className="hover:text-accent transition-colors">+1 (212) 555-1234</a>
              </p>
              <p>
                <a href="mailto:contact@artisangallery.com" className="hover:text-accent transition-colors">contact@artisangallery.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Artisan Gallery. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            {' • '}
            <Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
