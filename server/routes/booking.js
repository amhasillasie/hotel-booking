import express from "express";
import { supabase } from "../db/supabase.js";

const router = express.Router();

// generate booking reference 
function generateReference() {
    return "BK" + Math.floor(100000 + Math.random() * 900000);
}

// Get all bookings
router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .order("id", { ascending: false });

  if (error) return res.status(400).json({ error });
  res.json(data);
});
// Create a booking
router.post("/", async (req, res) => {
  const {
    customer_name,
    room_id,
    check_in,
    check_out,
    total_amount,
    email,
    phone,
    notes
  } = req.body;

   // Get room name from DB
const { data: room } = await supabase
    .from("rooms")
    .select("name")
    .eq("id", room_id)
    .single();

    const newBooking = {
    booking_ref: generateReference(),
    customer_name,
    room_id,
    room_name: room?.name || "",
    check_in,
    check_out,
    total_amount,
    email,
    phone,
    notes,
    status: "confirmed"
  };

  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    .select();

  if (error) return res.status(400).json({ error });
  res.json(data[0]);
});

// Update booking
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("bookings")
    .update(req.body)
    .eq("id", id)
    .select();

  if (error) return res.status(400).json({ error });
  res.json(data[0]);
});
// Delete booking
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", id);

  if (error) return res.status(400).json({ error });
  res.json({ message: "Booking deleted" });
});

// Check availability
router.post("/check", async (req, res) => {
  const { room_id, check_in, check_out } = req.body;

  const { data } = await supabase
    .from("bookings")
    .select("*")
    .eq("room_id", room_id)
    .lte("check_out", check_in)
    .gte("check_in", check_out);

  res.json({ available: data.length === 0 });
});
export default router;
