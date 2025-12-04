import React, { useEffect, useState } from "react";
import axios from "axios";


const API = import.meta.env.VITE_API_URL || "";

const BookingsManage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  // UI state
  const [viewBooking, setViewBooking] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    fetchBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchBookings() {
    setLoading(true);
    setError("");
    try {
      if (!API) throw new Error("No API configured — using mock data");
      const res = await axios.get(`${API}/api/bookings`);
      setBookings(res.data || []);
    } catch (err) {
      console.warn("Bookings fetch failed — using mock data:", err.message);
      setError(err.message);
      setBookings([
        {
          id: 101,
          booking_ref: "HTL-20251201-XY1",
          customer_name: "John Doe",
          room_name: "Deluxe Suite (201)",
          check_in: "2025-12-05",
          check_out: "2025-12-08",
          status: "pending",
          total_amount: 450,
          phone: "+251912345678",
          email: "john@example.com",
          notes: "Late arrival"
        },
        {
          id: 102,
          booking_ref: "HTL-20251203-BF2",
          customer_name: "Sara Ali",
          room_name: "Family Room (305)",
          check_in: "2025-12-10",
          check_out: "2025-12-13",
          status: "confirmed",
          total_amount: 900,
          phone: "+251987654321",
          email: "sara@example.com",
          notes: ""
        },
        {
          id: 103,
          booking_ref: "HTL-20251128-TR7",
          customer_name: "Peter Brown",
          room_name: "Standard Room (110)",
          check_in: "2025-11-29",
          check_out: "2025-12-01",
          status: "cancelled",
          total_amount: 180,
          phone: "+251911223344",
          email: "peter@example.com",
          notes: "Customer cancelled"
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  // filtering + searching
  const visible = bookings.filter((b) => {
    if (filter !== "all" && b.status !== filter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        (b.customer_name && b.customer_name.toLowerCase().includes(q)) ||
        (b.booking_ref && b.booking_ref.toLowerCase().includes(q)) ||
        (b.room_name && b.room_name.toLowerCase().includes(q))
      );
    }
    return true;
  });

  async function updateStatus(id, newStatus) {
    try {
      if (!API) {
        setBookings((prev) => prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p)));
        return;
      }
      const res = await axios.put(`${API}/api/bookings/${id}`, { status: newStatus });
      setBookings((prev) => prev.map((p) => (p.id === id ? res.data : p)));
    } catch (err) {
      alert("Failed to update status: " + (err.response?.data?.message || err.message));
    }
  }

  async function doDelete() {
    if (!confirmDeleteId) return;
    try {
      if (!API) {
        setBookings((prev) => prev.filter((p) => p.id !== confirmDeleteId));
      } else {
        await axios.delete(`${API}/api/bookings/${confirmDeleteId}`);
        setBookings((prev) => prev.filter((p) => p.id !== confirmDeleteId));
      }
      setConfirmDeleteId(null);
    } catch (err) {
      alert("Delete failed: " + (err.response?.data?.message || err.message));
    }
  }

  return (
    <div className="bm-container">
      <div className="bm-header">
        <h1>Bookings Management</h1>
        <div className="bm-controls">
          <input
            className="bm-search"
            placeholder="Search booking ref, customer or room..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="bm-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
            <option value="checked_in">Checked In</option>
            <option value="checked_out">Checked Out</option>
          </select>
          <button className="btn refresh" onClick={fetchBookings}>Refresh</button>
        </div>
      </div>

      {loading ? (
        <div className="bm-loading">Loading bookings...</div>
      ) : (
        <>
          {error && <div className="bm-warning">Warning: {error} — showing mock data</div>}

          <div className="bm-table-wrap">
            <table className="bm-table">
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>Customer</th>
                  <th>Room</th>
                  <th>Dates</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th className="center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visible.length === 0 ? (
                  <tr><td colSpan="7" className="empty">No bookings found</td></tr>
                ) : visible.map((b) => (
                  <tr key={b.id}>
                    <td className="mono">{b.booking_ref}</td>
                    <td>{b.customer_name}<div className="muted">{b.email || b.phone}</div></td>
                    <td>{b.room_name}</td>
                    <td>{b.check_in} → {b.check_out}</td>
                    <td>${b.total_amount?.toFixed?.(2) ?? b.total_amount}</td>
                    <td>
                      <span className={`status-pill ${b.status}`}>{b.status.replace("_", " ")}</span>
                    </td>
                    <td className="center">
                      <button className="action view" onClick={() => setViewBooking(b)}>View</button>
                      <div className="dropdown">
                        <button className="action more">⋯</button>
                        <div className="dropdown-menu">
                          {b.status !== "confirmed" && <button onClick={() => updateStatus(b.id, "confirmed")}>Confirm</button>}
                          {b.status !== "cancelled" && <button onClick={() => updateStatus(b.id, "cancelled")}>Cancel</button>}
                          {b.status !== "checked_in" && <button onClick={() => updateStatus(b.id, "checked_in")}>Check-in</button>}
                          {b.status !== "checked_out" && <button onClick={() => updateStatus(b.id, "checked_out")}>Check-out</button>}
                          <button className="danger" onClick={() => setConfirmDeleteId(b.id)}>Delete</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* View booking modal */}
      {viewBooking && (
        <div className="bm-modal-backdrop" onClick={() => setViewBooking(null)}>
          <div className="bm-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Booking {viewBooking.booking_ref}</h3>
            <div className="bm-modal-row">
              <div><strong>Guest</strong><div>{viewBooking.customer_name}</div></div>
              <div><strong>Phone / Email</strong><div>{viewBooking.phone} / {viewBooking.email}</div></div>
            </div>
            <div className="bm-modal-row">
              <div><strong>Room</strong><div>{viewBooking.room_name}</div></div>
              <div><strong>Dates</strong><div>{viewBooking.check_in} → {viewBooking.check_out}</div></div>
            </div>
            <div className="bm-modal-row">
              <div><strong>Total</strong><div>${viewBooking.total_amount}</div></div>
              <div><strong>Status</strong><div className={`status-pill ${viewBooking.status}`}>{viewBooking.status}</div></div>
            </div>
            {viewBooking.notes && <p className="bm-notes"><strong>Notes:</strong> {viewBooking.notes}</p>}

            <div className="bm-modal-actions">
              <button className="btn" onClick={() => setViewBooking(null)}>Close</button>
              <button className="btn primary" onClick={() => { updateStatus(viewBooking.id, "confirmed"); setViewBooking(null); }}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation */}
      {confirmDeleteId && (
        <div className="bm-modal-backdrop" onClick={() => setConfirmDeleteId(null)}>
          <div className="bm-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Delete booking?</h3>
            <p>Are you sure you want to permanently delete this booking? This cannot be undone.</p>
            <div className="bm-modal-actions">
              <button className="btn" onClick={() => setConfirmDeleteId(null)}>Cancel</button>
              <button className="btn danger" onClick={doDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingsManage