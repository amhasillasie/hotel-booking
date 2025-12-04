import React, { useEffect, useState } from "react";
import axios from "axios";


/**
 * Rooms Admin page
 *
 * API endpoints expected:
 * GET    /api/rooms            -> returns array of rooms
 * POST   /api/rooms            -> create room { name, type, price, max_guests, available }
 * PUT    /api/rooms/:id        -> update room
 * DELETE /api/rooms/:id        -> delete room
 *
 * If API fails, page uses mock data for local testing.
 */

const API = import.meta.env.VITE_API_URL || "";
// e.g. http://localhost:4000

const RoomsManage = () => {


  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Modal state
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  // Form state (used for add & edit)
  const initialForm = { name: "", type: "", price: "", max_guests: "" };
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    fetchRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchRooms() {
    setLoading(true);
    setError("");
    try {
      if (!API) throw new Error("No API configured — using mock data");
      const res = await axios.get(`${API}/api/rooms`);
      setRooms(res.data || []);
    } catch (err) {
      // fallback mock data (so UI works while backend is not ready)
      console.warn("Rooms fetch failed — using mock data:", err.message);
      setRooms([
        { id: 1, name: "Deluxe Room", type: "Deluxe", price: 120, max_guests: 2, available: true },
        { id: 2, name: "Family Room", type: "Family", price: 180, max_guests: 4, available: false },
        { id: 3, name: "Standard Room", type: "Standard", price: 90, max_guests: 2, available: true },
      ]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // ---------- Add Room ----------
  function openAdd() {
    setForm(initialForm);
    setShowAdd(true);
    setShowEdit(false);
  }

  async function handleAddSubmit(e) {
    e.preventDefault();
    const payload = {
      name: form.name.trim(),
      type: form.type.trim(),
      price: parseFloat(form.price) || 0,
      max_guests: parseInt(form.max_guests) || 1,
      available: true,
    };
    // basic validation
    if (!payload.name || !payload.type || payload.price <= 0 || payload.max_guests <= 0) {
      alert("Please fill all fields with valid values.");
      return;
    }

    try {
      if (!API) {
        // local mock: create id
        const id = Math.max(0, ...rooms.map(r => r.id)) + 1;
        setRooms(prev => [...prev, { id, ...payload }]);
      } else {
        const res = await axios.post(`${API}/api/rooms`, payload);
        setRooms(prev => [...prev, res.data]);
      }
      setShowAdd(false);
      setForm(initialForm);
    } catch (err) {
      alert("Failed to add room: " + (err.response?.data?.message || err.message));
    }
  }

  // ---------- Edit Room ----------
  function openEdit(room) {
    setEditingRoom(room);
    setForm({
      name: room.name,
      type: room.type,
      price: room.price,
      max_guests: room.max_guests,
    });
    setShowEdit(true);
    setShowAdd(false);
  }

  async function handleEditSubmit(e) {
    e.preventDefault();
    if (!editingRoom) return;
    const payload = {
      name: form.name.trim(),
      type: form.type.trim(),
      price: parseFloat(form.price) || 0,
      max_guests: parseInt(form.max_guests) || 1,
    };
    if (!payload.name || !payload.type || payload.price <= 0 || payload.max_guests <= 0) {
      alert("Please fill all fields with valid values.");
      return;
    }

    try {
      if (!API) {
        setRooms(prev => prev.map(r => (r.id === editingRoom.id ? { ...r, ...payload } : r)));
      } else {
        const res = await axios.put(`${API}/api/rooms/${editingRoom.id}`, payload);
        setRooms(prev => prev.map(r => (r.id === editingRoom.id ? res.data : r)));
      }
      setShowEdit(false);
      setEditingRoom(null);
      setForm(initialForm);
    } catch (err) {
      alert("Failed to update room: " + (err.response?.data?.message || err.message));
    }
  }

  // ---------- Delete Room ----------
  async function confirmDelete(id) {
    setConfirmDeleteId(id);
  }

  async function doDelete() {
    if (confirmDeleteId == null) return;
    try {
      if (!API) {
        setRooms(prev => prev.filter(r => r.id !== confirmDeleteId));
      } else {
        await axios.delete(`${API}/api/rooms/${confirmDeleteId}`);
        setRooms(prev => prev.filter(r => r.id !== confirmDeleteId));
      }
      setConfirmDeleteId(null);
    } catch (err) {
      alert("Failed to delete room: " + (err.response?.data?.message || err.message));
    }
  }
      
      

  // ---------- Toggle availability ----------
  async function toggleAvailability(room) {
    const updated = { ...room, available: !room.available };
    try {
      if (!API) {
        setRooms(prev => prev.map(r => (r.id === room.id ? updated : r)));
      } else {
        const res = await axios.put(`${API}/api/rooms/${room.id}`, { available: updated.available });
        setRooms(prev => prev.map(r => (r.id === room.id ? res.data : r)));
      }
    } catch (err) {
      alert("Failed to change availability: " + (err.response?.data?.message || err.message));
    }
  }

  // ---------- helpers ----------
  function handleInput(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="admin-rooms">
      <div className="admin-header">
        <h1>Rooms</h1>
        <div className="header-actions">
          <button className="btn primary" onClick={openAdd}>+ Add Room</button>
          <button className="btn" onClick={fetchRooms}>Refresh</button>
        </div>
      </div>

      {loading ? (
        <div className="loader">Loading rooms...</div>
      ) : (
        <>
          {error && <div className="api-error">Warning: {error}</div>}

          <div className="rooms-grid">
            {rooms.map((r) => (
              <div key={r.id} className="room-card">
                <div className="room-top">
                  <div>
                    <div className="room-name">{r.name}</div>
                    <div className="room-type">{r.type}</div>
                  </div>
                  <div className="room-price">${r.price}</div>
                </div>

                <div className="room-body">
                  <div>Max guests: <strong>{r.max_guests}</strong></div>
                  <div className="availability-row">
                    <span className={`badge ${r.available ? "avail" : "unavail"}`}>
                      {r.available ? "Available" : "Unavailable"}
                    </span>
                    <button className="link-btn" onClick={() => toggleAvailability(r)}>
                      {r.available ? "Set Unavailable" : "Set Available"}
                    </button>
                  </div>
                </div>

                <div className="room-actions">
                  <button className="btn small" onClick={() => openEdit(r)}>Edit</button>
                  <button className="btn danger small" onClick={() => confirmDelete(r.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Add Modal */}
      {showAdd && (
        <div className="modal-backdrop" onClick={() => setShowAdd(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Add Room</h3>
            <form onSubmit={handleAddSubmit}>
              <label>Room Name</label>
              <input name="name" value={form.name} onChange={handleInput} />

              <label>Room Type</label>
              <input name="type" value={form.type} onChange={handleInput} />

              <label>Price</label>
              <input name="price" value={form.price} onChange={handleInput} type="number" min="0" step="0.01"/>

              <label>Max Guests</label>
              <input name="max_guests" value={form.max_guests} onChange={handleInput} type="number" min="1" max="10"/>

              <div className="modal-actions">
                <button type="button" className="btn" onClick={() => setShowAdd(false)}>Cancel</button>
                <button type="submit" className="btn primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEdit && editingRoom && (
        <div className="modal-backdrop" onClick={() => { setShowEdit(false); setEditingRoom(null); }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Edit Room</h3>
            <form onSubmit={handleEditSubmit}>
              <label>Room Name</label>
              <input name="name" value={form.name} onChange={handleInput} />

              <label>Room Type</label>
              <input name="type" value={form.type} onChange={handleInput} />

              <label>Price</label>
              <input name="price" value={form.price} onChange={handleInput} type="number" min="0" step="0.01"/>

              <label>Max Guests</label>
              <input name="max_guests" value={form.max_guests} onChange={handleInput} type="number" min="1" max="10"/>

              <div className="modal-actions">
                <button type="button" className="btn" onClick={() => { setShowEdit(false); setEditingRoom(null); }}>Cancel</button>
                <button type="submit" className="btn primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirmation */}
      {confirmDeleteId !== null && (
        <div className="modal-backdrop" onClick={() => setConfirmDeleteId(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Delete Room</h3>
            <p>Are you sure you want to delete this room? This cannot be undone.</p>
            <div className="modal-actions">
              <button className="btn" onClick={() => setConfirmDeleteId(null)}>Cancel</button>
              <button className="btn danger" onClick={doDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default RoomsManage