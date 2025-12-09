import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "";

// Images based on room type
const roomImages = {
  "Deluxe": ["/deluxe1.jpg", "/deluxe2.jpg", "/deluxe3.jpg"],
  "Family": ["/family1.jpg", "/family2.jpg", "/family3.jpg"],
  "Standard": ["/standard1.jpg", "/standard2.jpg", "/standard3.jpg"],
  "Executive": ["/executive1.jpg", "/executive2.jpg", "/executive3.jpg"],
  "Twin": ["/twin1.jpg", "/twin2.jpg", "/twin3.jpg"],
  "Honeymoon": ["/honeymoon1.jpg", "/honeymoon2.jpg", "/honeymoon3.jpg"],
};

// fallback imgs
const defaultImages = ["/default1.jpg", "/default2.jpg", "/default3.jpg"];

const RoomDetail = () => {
  const [params] = useSearchParams();
  const roomId = params.get("id");

  const [room, setRoom] = useState(null);       // room from backend
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  useEffect(() => {
    if (roomId) fetchRoom();
  }, [roomId]);

  // ---- Fetch room by ID ----
  async function fetchRoom() {
    try {
      if (!API) throw new Error("API not set");
      const res = await axios.get(`${API}/api/rooms/${roomId}`);
      setRoom(res.data);
    } catch (err) {
      console.warn("Failed to fetch single room:", err.message);

      // mock if backend not ready
      setRoom({
        id: 0,
        name: "Mock Deluxe Suite",
        type: "Deluxe",
        price: 349,
        max_guests: 2,
        description: "This is mock data because backend did not load.",
      });
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Loading room details…</p>;
  if (!room) return <p>Room not found.</p>;

  // pick correct image set
  const images = roomImages[room.type] || defaultImages;

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff * room.price : 0;
  };

  return (
    <>
      <Header />

      <div className="room-detail-container">

        {/* IMAGE SLIDER */}
        <div className="image-slider">
          <button className="slider-btn left" onClick={prevImage}>‹</button>
          <img src={images[currentImage]} className="room-detail-img" alt="Room" />
          <button className="slider-btn right" onClick={nextImage}>›</button>
        </div>

        <div className="room-detail-content">

          {/* LEFT SECTION */}
          <div className="room-info">
            <h1>{room.name}</h1>

            <p className="rating">
              ⭐ <strong>4.8/5</strong> | <span>${room.price} / night</span>
            </p>

            <p className="description">
              {room.description || "No description available."}
            </p>

            <h3>Amenities</h3>
            <ul className="amenities-list">
              <li>Free Wi-Fi</li>
              <li>Smart TV</li>
              <li>Mini-Bar</li>
              <li>Comfortable Bed</li>
              <li>Room Service</li>
            </ul>
          </div>

          {/* RIGHT BOOKING FORM */}
          <form className="form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Check-in</label>
                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
              </div>

              <div className="form-group">
                <label>Check-out</label>
                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
              </div>
            </div>

            <p className="total">
              Total: <strong>${calculateTotal()}</strong>
            </p>

            <button className="submit-btn">Book Now</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RoomDetail;
