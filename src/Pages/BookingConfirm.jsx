import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const BookingConfirm = () => {
  return (
    <>
    <Header />
    <div className="booking-container">
      {/* Top Success Section */}
      <div className="success-box">
        <div className="success-icon">✔</div>
        <h2>Booking Confirmed!</h2>
        <p>Your reservation has been successfully placed. We look forward to welcoming you!</p>
      </div>

      {/* Reference Number */}
      <div className="ref-box">
        <p>Your Booking Reference</p>
        <h3 className="ref-number">HBX7Y229A1B3C5</h3>
      </div>

      {/* Reservation Details */}
      <div className="details-box">
        <h3 className="section-title">Your Reservation Details</h3>

        <div className="detail-row">
          <span>Room Type</span>
          <span>Deluxe King Room</span>
        </div>

        <div className="detail-row">
          <span>Guests</span>
          <span>2 Adults, 1 Child</span>
        </div>

        <div className="detail-row">
          <span>Check-in Date</span>
          <span>October 26, 2024</span>
        </div>

        <div className="detail-row">
          <span>Check-out Date</span>
          <span>October 29, 2024</span>
        </div>

        <div className="detail-row total">
          <span>Total Amount</span>
          <span className="price">$749.99</span>
        </div>
      </div>

      {/* Important Info */}
      <div className="info-box">
        <h3>Important Information for Your Stay</h3>
        <ul>
          <li>You will receive a detailed email confirmation shortly.</li>
          <li>Check-in time is 3:00 PM. Please bring a valid ID.</li>
          <li>Our concierge team is available 24/7.</li>
          <li>Enjoy complimentary breakfast daily.</li>
          <li>Explore the spa and fitness center.</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="btn home-btn">Back to Home</button>
        <button className="btn rooms-btn">View Other Rooms</button>
      </div>
    </div>  
         <Footer />
    </>
  );
};

export default BookingConfirm;
