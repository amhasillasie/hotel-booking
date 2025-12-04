import express from "express";
import { supabase } from "../db/supabase.js";

const router = express.Router();

// GET all rooms
router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .order("id");

  if (error) return res.status(400).json({ error });
  res.json(data);
});

// CREATE room
router.post("/", async (req, res) => {
  const { name, type, price, max_guests, available } = req.body;

  const { data, error } = await supabase
    .from("rooms")
    .insert([{ name, type, price, max_guests, available }])
    .select();

  if (error) return res.status(400).json({ error });
  res.json(data[0]);
});

// UPDATE room (correct)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, type, price, max_guests, available } = req.body;

  const { data, error } = await supabase
    .from("rooms")
    .update({ name, type, price, max_guests, available })
    .eq("id", id)
    .select();

  if (error) return res.status(400).json({ error });
  res.json(data[0]);
});

// DELETE room (correct)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("rooms")
    .delete()
    .eq("id", id);

  if (error) return res.status(400).json({ error });
  res.json({ message: "Room deleted" });
});

// TOGGLE availability
router.patch("/:id/availability", async (req, res) => {
  const { id } = req.params;
  const { available } = req.body;

  const { error } = await supabase
    .from("rooms")
    .update({ available })
    .eq("id", id);

  if (error) return res.status(400).json({ error });
  res.json({ message: "availability updated" });
});

export default router;
