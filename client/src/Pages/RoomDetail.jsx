import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const RoomDetail = () => {
  const roomImages = ["/room1.jpg", "/room2.jpg", "/room3.jpg"];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % roomImages.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + roomImages.length) % roomImages.length);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate - inDate) / (1000 * 3600 * 24);
    return diff > 0 ? diff * 349 : 0;
  };

  return (
    <> <Header/>
    <div className="room-detail-container">

      {/* IMAGE SLIDER */}
      <div className="image-slider">
        <button className="slider-btn left" onClick={prevImage}>‹</button>
        <img src={roomImages[current]} className="room-detail-img" alt="Room" />
        <button className="slider-btn right" onClick={nextImage}>›</button>
      </div>

      <div className="room-detail-content">

        {/* LEFT: ROOM INFO */}
        <div className="room-info">
          <h1>Grand Executive Suite</h1>

          <p className="rating">
            ⭐ <strong>4.8/5</strong> | <span>$349 / night</span>
          </p>

          <p className="description">
            Experience unparalleled luxury in our Grand Executive Suite. 
            This spacious room features a king-sized bed with premium linens, 
            a private living area with comfortable seating, and stunning panoramic 
            city views. Every detail—state-of-the-art entertainment and 
            an indulgent bathroom with rainfall shower and deep soaking tub—
            is designed for business travelers or couples seeking premium relaxation.
          </p>

          <h3>Room Amenities</h3>
          <ul className="amenities-list">
            <li>High-Speed Wi-Fi</li>
            <li>King Bed</li>
            <li>Smart TV</li>
            <li>Executive Bathroom</li>
            <li>Daily Housekeeping</li>
            <li>Mini-Bar</li>
            <li>Direct Dial Phone</li>
            <li>Free Parking</li>
          </ul>
        </div>

        {/* RIGHT: BOOKING FORM */}
        <div className="booking-card">
          <h3>Book Your Stay</h3>

          <label>Full Name</label>
          <input type="text" placeholder="Your Name" />

          <label>Email Address</label>
          <input type="email" placeholder="you@mail.com" />

          <label>Phone Number</label>
          <input type="text" placeholder="+123 456 789" />

          <label>Check-In Date</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />

          <label>Check-Out Date</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />

          <div className="total-price">
            <span>Total: </span>
            <strong>${calculateTotal()}</strong>
          </div>

          <button className="book-now-btn" onClick={ () => window.location.href = "/bookingconfirm" } >Book Now</button>
        </div>
      </div>
    </div><Footer/></>
  );
};

export default RoomDetail;
