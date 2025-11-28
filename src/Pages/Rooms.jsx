import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const RoomsPage = () => {
  return (
    <>
     <Header/>
    <div className="rooms-container">

      {/* FILTER SIDEBAR */}
      <aside className="filter-sidebar">
        <h3>Guests</h3>
        <div className="guest-counter">
          <button>-</button>
          <span>2</span>
          <button>+</button>
        </div>

        <h3>Price Range</h3>
        <div className="price-range">
          <input type="range" min="100" max="500" />
          <div className="price-labels">
            <span>$100</span>
            <span>$500</span>
          </div>
        </div>

        <h3>Amenities</h3>
        <ul className="amenities-list">
          {[
            "Free Wi-Fi",
            "Breakfast Included",
            "King Bed",
            "Ocean View",
            "Private Balcony",
            "Spa Access",
            "Fitness Center",
            "Mini-Bar",
            "Smart TV",
          ].map((item) => (
            <li key={item}>
              <input type="checkbox" /> {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* ROOM CARDS SECTION */}
      <main className="rooms-section">
        <h2 className="title">Our Available Rooms</h2>

        <div className="rooms-grid">

          {[
            {
              name: "Deluxe Suite",
              img: "/room1.jpg",
              guests: "2 Guests",
              price: "$300 / Night",
            },
            {
              name: "Family Room",
              img: "/room1.jpg",
              guests: "4 Guests",
              price: "$350 / Night",
            },
            {
              name: "Standard Double",
              img: "/room1.jpg",
              guests: "2 Guests",
              price: "$150 / Night",
            },
            {
              name: "Executive Room",
              img: "/room1.jpg",
              guests: "2 Guests",
              price: "$420 / Night",
            },
            {
              name: "Twin Room",
              img: "/room1.jpg",
              guests: "2 Guests",
              price: "$200 / Night",
            },
            {
              name: "Honeymoon Suite",
              img: "/room1.jpg",
              guests: "2 Guests",
              price: "$500 / Night",
            },
          ].map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.img} alt={room.name} className="room-image" />

              <div className="room-info">
                <h3>{room.name}</h3>
                <p>{room.guests}</p>
                <p className="price">{room.price}</p>

                <button className="view-btn" onClick={() => window.location.href = "/roomdetail"} >View Details</button>
              </div>
            </div>
          ))}

        </div>
      </main>
    </div><Footer /></>
  );
};

export default RoomsPage;
