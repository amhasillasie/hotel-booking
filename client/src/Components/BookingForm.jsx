import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const BookingForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    check_in: "",
    check_out: "",
    guests: 1,
    notes: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post(`${API}/api/bookings`, {
        customer_name: form.name,
        email: form.email,
        phone: form.phone,
        check_in: form.check_in,
        check_out: form.check_out,
        guests: form.guests,
        notes: form.notes,
      });

      alert("Booking successful!");
      navigate("/bookingconfirm");

    } catch (err) {
      console.error("BOOKING ERROR:", err.response?.data || err.message);
      alert("Failed to create booking");
    }
  }

  return (
    <>
      <Header />

      <div className="reservation-form">
        <form className="form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Check-In</label>
              <input type="date" name="check_in" value={form.check_in} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Check-Out</label>
              <input type="date" name="check_out" value={form.check_out} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label>Guests</label>
            <select name="guests" value={form.guests} onChange={handleChange}>
              {[1,2,3,4,5].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Book Now
          </button>

        </form>
      </div>

      <Footer />
    </>
  );
};

export default BookingForm;
