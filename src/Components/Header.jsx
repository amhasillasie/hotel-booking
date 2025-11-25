import React from "react";


const Header = () => {
  return (
    <header className="header">
      {/* LOGO */}
      <div className="header-left">
        <img
          src="/logo.png"   // <-- replace with your logo path
          alt="Lake Avenue Hotel"
          className="logo"
        />
        <h2 className="hotel-name">Lake Avenue Hotel</h2>
      </div>

      {/* NAVIGATION */}
      <nav className="nav-menu">
        <a href="#" className="nav-item active">Home</a>
        <a href="#" className="nav-item">Rooms</a>
        <a href="#" className="nav-item">Bars & Restaurants</a>
        <a href="#" className="nav-item">Gallery</a>
        <a href="#" className="nav-item">Blog</a>
        <a href="#" className="nav-item">Contact</a>
      </nav>

      {/* BUTTON */}
      <button className="book-btn">Book Now</button>
    </header>
  );
}

export default Header