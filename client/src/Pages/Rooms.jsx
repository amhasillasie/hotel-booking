import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || ""; 
// Example: http://localhost:4000

// ---- Image Mapping based on room type ----
const roomImages = {
  "Deluxe": "/deluxe.jpg",
  "Deluxe Room": "/deluxe.jpg",

  "Family": "/family.jpg",
  "Family Room": "/family.jpg",

  "Standard": "/standard.jpg",
  "Standard Double": "/standard.jpg",

  "Executive": "/executive.jpg",
  "Executive Room": "/executive.jpg",

  "Twin": "/twin.jpg",
  "Twin Room": "/twin.jpg",

  "Honeymoon": "/honeymoon.jpg",
  "Honeymoon Suite": "/honeymoon.jpg",
};

// Default image if type not found
const defaultRoomImg = "/default-room.jpg";

const RoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // ---- Filters (you can expand later) ----
  const [guestCount, setGuestCount] = useState(2);

  useEffect(() => {
    fetchRooms();
  }, []);

  async function fetchRooms() {
    setLoading(true);
    try {
      if (!API) throw new Error("No API set");

      const res = await axios.get(`${API}/api/rooms`);
      setRooms(res.data || []);
    } catch (err) {
      console.warn("Room fetch failed, using mock data…");

      setRooms([
        { id: 1, name: "Deluxe Suite", type: "Deluxe", price: 300, max_guests: 2 },
        { id: 2, name: "Family Room", type: "Family", price: 350, max_guests: 4 },
        { id: 3, name: "Standard Double", type: "Standard", price: 150, max_guests: 2 },
      ]);
    } finally {
      setLoading(false);
    }
  }

  // ---- Get image by type ----
  function getRoomImage(type = "") {
    return roomImages[type] || defaultRoomImg;
  }

  return (
    <>
      <Header />

      <div className="rooms-container">
        {/* -------- FILTER SIDEBAR -------- */}
        <aside className="filter-sidebar">
          <h3>Guests</h3>
          <div className="guest-counter">
            <button onClick={() => setGuestCount(Math.max(1, guestCount - 1))}>-</button>
            <span>{guestCount}</span>
            <button onClick={() => setGuestCount(Math.min(10, guestCount + 1))}>+</button>
          </div>

          <h3>Price Range</h3>
          <div className="price-range">
            <input type="range" min="50" max="1000" />
            <div className="price-labels">
              <span>$50</span>
              <span>$1000</span>
            </div>
          </div>

          <h3>Amenities</h3>
          <ul className="amenities-list">
            {["Wi-Fi", "Breakfast", "Balcony", "Spa", "Smart TV"].map((item) => (
              <li key={item}>
                <input type="checkbox" /> {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* -------- MAIN ROOM GRID -------- */}
        <main className="rooms-section">
          <h2 className="title">Available Rooms</h2>

          {loading ? (
            <p className="loading">Loading rooms...</p>
          ) : (
            <div className="rooms-grid">
              {rooms.map((room) => (
                <div className="room-card" key={room.id}>
                  <img
                    src={getRoomImage(room.type)}
                    alt={room.name}
                    className="room-image"
                  />

                  <div className="room-info">
                    <h3>{room.name}</h3>
                    <p>{room.max_guests} Guests</p>
                    <p className="price">${room.price} / Night</p>

                    <button
                      className="view-btn"
                      onClick={() => window.location.href = `/roomdetail?id=${room.id}`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default RoomsPage;
