import React, { useState } from "react";
import { checkAvailability } from "../api"; // connect to backend

const AvailabilityWidget = () => {
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // ===========================
  // REAL CHECK AVAILABILITY LOGIC
  // ===========================
  const handleCheck = async () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    try {
      const response = await checkAvailability({
        room_id: 1, // Since you have ONE hotel / one room type for now
        check_in: checkIn,
        check_out: checkOut,
        guests: guests,
      });

      // save to localStorage so BookingForm can use it
      localStorage.setItem("checkIn", checkIn);
      localStorage.setItem("checkOut", checkOut);
      localStorage.setItem("guests", guests);

      if (response.available) {
        window.location.href = "bookingcard";
      } else {
        window.location.href = "/no";
      }
    } catch (err) {
      console.error("Availability error:", err);
      alert("Server error. Try again.");
    }
  };

  return (
    <>
      <div className="aroundall">
        <div className="overall">
          <div>
            {/* HEADER */}
            <header>
              <h1>Check Availability</h1>
              <p className="subtitle">Find the best rooms for your dates.</p>
            </header>

            {/* DATE SECTION */}
            <section className="date-section">
              <div className="date-row">
                <div className="date-container">

                  {/* Check-in */}
                  <div className="date-group">
                    <label>Check-in Date</label>
                    <div className="date-box">
                      <span className="icon">📅</span>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Check-out */}
                  <div className="date-group">
                    <label>Check-out Date</label>
                    <div className="date-box">
                      <span className="icon">📅</span>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                    </div>
                  </div>

                </div>
              </div>
            </section>

            <hr />

            {/* GUESTS SECTION */}
            <div className="guest-box">
              <label className="guest-label">Guests</label>

              <div className="guest-input-row">
                <button
                  className="guest-btn"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                >
                  -
                </button>

                <div className="guest-value">{guests}</div>

                <button
                  className="guest-btn"
                  onClick={() => setGuests(Math.min(5, guests + 1))}
                >
                  +
                </button>
              </div>

              <div className="guest-note">Max 5 guests</div>
            </div>

            {/* CHECK BUTTON */}
            <button className="check-button" onClick={handleCheck}>
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailabilityWidget;
