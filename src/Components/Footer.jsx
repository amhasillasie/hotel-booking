import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <span>🏨</span> HotelBooker
        </div>
        <p>
          Providing the best hotel experience 
        </p>
        <p>for your perfect getaway.</p>
      </div>

      <div className="footer-section">
        <h3>Rooms</h3>
        <ul>
          <li>Rooms</li>
          <li>Amenities</li>
          <li>Gallery</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Legal</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Sitemap</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>123 Hotel St, Hospitality City, HT 12345</p>
        <p>info@hotelbooker.com</p>
        <p>+1 (555) 123-4567</p>
      </div>
    </footer>
  );
}

export default Footer
