import React from "react";
import BookingForm from "../Components/BookingForm";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
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
<BookingForm />

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




<Footer />
</div>
    </div>
    </>
)


}


export default Home