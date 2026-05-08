import express from "express";
import { supabase } from "../db/supabase.js";

const router = express.Router();

/**
 * Generate booking reference
 * Example: BK123456
 */
function generateReference() {
  return "BK" + Math.floor(100000 + Math.random() * 900000);
}

/**
 * ✅ GET all bookings (Admin)
 */
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("id", { ascending: false });

    if (error) return res.status(400).json({ error: error.message });

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * ✅ CREATE booking (User)
 */
router.post("/", async (req, res) => {
  try {
    const {
      customer_name,
      email,
      phone,
      room_id,
      check_in,
      check_out,
      guests,
      notes
    } = req.body;

    // ---------- VALIDATION ----------
    if (!customer_name || customer_name.trim().length < 2) {
      return res.status(400).json({ error: "Customer name is required" });
    }
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }
    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }
    // if (!room_id) {
    //   return res.status(400).json({ error: "Room ID is required" });
    // }
    if (!check_in || !check_out) {
      return res.status(400).json({ error: "Check-in and check-out dates are required" });
    }
    if (new Date(check_out) <= new Date(check_in)) {
      return res.status(400).json({ error: "Check-out must be after check-in" });
    }
    if (!guests || guests < 1) {
      return res.status(400).json({ error: "Guests must be at least 1" });
    }

    // ---------- GET ROOM ----------
    // const { data: room, error: roomError } = await supabase
    //   .from("rooms")
    //   .select("id, name")
    //   .eq("id", room_id)
    //   .single();

    // if (roomError || !room) {
    //   return res.status(400).json({ error: "Room not found" });
    // }

    // ---------- OPTIONAL AVAILABILITY CHECK ----------
    const { data: conflicts } = await supabase
      .from("bookings")
      .select("id")
      .eq("room_id", room_id)
      .lt("check_out", check_out)
      .gt("check_in", check_in);

    if (conflicts && conflicts.length > 0) {
      return res.status(400).json({ error: "Room is already booked for these dates" });
    }

    // ---------- CREATE BOOKING ----------
    const newBooking = {
      booking_ref: generateReference(),
      customer_name: customer_name.trim(),
      email,
      phone,
      // room_id,
      // room_name: room.name,
      check_in,
      check_out,
      guests,
      notes: notes || "",
   
    };

    const { data, error } = await supabase
      .from("bookings")
      .insert([newBooking])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * ✅ UPDATE booking (Admin)
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Booking ID required" });

    const { data, error } = await supabase
      .from("bookings")
      .update(req.body)
      .eq("id", id)
      .select()
      .single();

    if (error) return res.status(400).json({ error: error.message });

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * ✅ DELETE booking (Admin)
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Booking ID required" });

    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", id);

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * ✅ CHECK AVAILABILITY
 */
router.post("/check", async (req, res) => {
  try {
    const { room_id, check_in, check_out } = req.body;

    if ( !check_in || !check_out) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const { data } = await supabase
      .from("bookings")
      .select("id")
      // .eq("room_id", room_id)
      .lt("check_out", check_out)
      .gt("check_in", check_in);

    res.json({ available: !data || data.length === 0 });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
