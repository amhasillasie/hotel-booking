import React from "react";
import BookingForm from "../Components/BookingForm";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AvailabilityWidget from "../Components/AvailabilityWidget";

const Home = () => {

 return  (
    <>
    <Header/>
    <div>
       <div className='overview'>
          <p className='whitebold'>Your Perfect Getway Awaits</p>
          <p className='hotelname'>Lake Avenue</p>
    </div>
    <div>
<AvailabilityWidget />
{/* <Rooms /> */}
<div className="home-container">

      {/* Discover Section */}
      <section className="discover-section">
        <div className="discover-image">
          <img src="/images/room1.jpg" alt="Discover" />
        </div>
          
        <div className="discover-text">
          <h2>Discover Our Story</h2>
          <p>
            At HotelBooker, we believe in creating unforgettable experiences.
            Nestled in the heart of the city, our hotel offers a serene escape
            with world-class amenities and exceptional service. From luxurious
            rooms to exquisite dining, every detail is crafted for your comfort.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
      </section>

      {/* Popular Rooms */}
      <section className="popular-section">
        <h2 className="section-title">Our Most Popular Rooms</h2>

        <div className="room-cards">

          {/* 1 */}
          <div className="room-card">
            <img src="/images/room2.jpg" alt="Deluxe Suite" />
            <h3>Deluxe Suite</h3>
            <p className="price">$250 <span>/night</span></p>
            <div className="tags">
              <span>King Bed</span>
              <span>Balcony</span>
              <span>Free WiFi</span>
            </div>
          </div>

          {/* 2 */}
          <div className="room-card">
            <img src="/images/room3.jpg" alt="Family Room" />
            <h3>Family Room</h3>
            <p className="price">$380 <span>/night</span></p>
            <div className="tags">
              <span>Two Queen Beds</span>
              <span>Spacious</span>
              <span>Kids Corner</span>
            </div>
          </div>

          {/* 3 */}
          <div className="room-card">
            <img src="/images/room4.jpg" alt="Executive Studio" />
            <h3>Executive Studio</h3>
            <p className="price">$320 <span>/night</span></p>
            <div className="tags">
              <span>Work Desk</span>
              <span>Kitchenette</span>
              <span>City View</span>
            </div>
          </div>

        </div>
      </section>
    </div>

    <div className="amenities-wrapper">
      <h2 className="amenities-title">Unmatched Amenities</h2>

      <div className="amenities-container">
        
        <div className="amenity-box">
          <div className="amenity-icon">📶</div>
          <h3>Free Wi-Fi</h3>
          <p>High-speed internet access throughout the hotel.</p>
        </div>

        <div className="amenity-box">
          <div className="amenity-icon">💆‍♂️</div>
          <h3>Spa & Wellness</h3>
          <p>Relaxing treatments and state-of-the-art facilities.</p>
        </div>

        <div className="amenity-box">
          <div className="amenity-icon">☕</div>
          <h3>Restaurant & Bar</h3>
          <p>Gourmet dining and refreshing beverages.</p>
        </div>

        <div className="amenity-box">
          <div className="amenity-icon">🅿️</div>
          <h3>Free Parking</h3>
          <p>Secure parking available for all guests.</p>
        </div>

        <div className="amenity-box">
          <div className="amenity-icon">🏋️‍♂️</div>
          <h3>Fitness Center</h3>
          <p>Fully equipped gym for your daily workout.</p>
        </div>

      </div>
    </div>
  );





</div>
    </div><Footer />
    </>
)


}


export default Home