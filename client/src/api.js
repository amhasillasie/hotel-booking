const API_URL = "http://localhost:4000/api";

export const getRooms = () => fetch(`${API_URL}/rooms`).then(res => res.json());

export const createRoom = (room) =>
  fetch(`${API_URL}/rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(room),
  }).then(res => res.json());

export const updateRoom = (id, room) =>
  fetch(`${API_URL}/rooms/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(room),
  }).then(res => res.json());

export const deleteRoom = (id) =>
  fetch(`${API_URL}/rooms/${id}`, { method: "DELETE" }).then(res => res.json());

export const checkAvailability = (data) =>
  fetch(`${API_URL}/bookings/check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const createBooking = (data) =>
  fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const getBookings = () =>
  fetch(`${API_URL}/bookings`).then(res => res.json());
