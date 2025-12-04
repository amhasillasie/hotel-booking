import React from "react"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const BookingFform = () => {
  return(
    <> <Header />
<div className="reservation-form">
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select id="guests">
                  <option>1 person</option>
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5 people</option>
                  <option>6+ people</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Special Requests</label>
                <textarea id="message" rows="3"></textarea>
              </div>
              <button type="submit" className="submit-btn">Book Now</button>
            </form>
          </div><Footer /> </>
  );
}

export default BookingFform
