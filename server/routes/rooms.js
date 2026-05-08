import express from "express";
import { supabase } from "../db/supabase.js";

const router = express.Router();

/* -------------------------------
   GET ALL ROOMS
--------------------------------*/
router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .order("id");

  if (error) return res.status(400).json({ error });
  res.json(data);
});

/* -------------------------------
   GET SINGLE ROOM BY ID
--------------------------------*/
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(400).json({ error });
  res.json(data);
});

/* -------------------------------
   CREATE NEW ROOM
--------------------------------*/
router.post("/", async (req, res) => {
  const { name, type, price, max_guests, available } = req.body;

  const { data, error } = await supabase
    .from("rooms")
    .insert([{ name, type, price, max_guests, available }])
    .select();

  if (error) return res.status(400).json({ error });
  res.json(data[0]);
});

/* -------------------------------
   UPDATE ROOM
--------------------------------*/
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

/* -------------------------------
   DELETE ROOM
--------------------------------*/
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("rooms")
    .delete()
    .eq("id", id);

  if (error) return res.status(400).json({ error });
  res.json({ message: "Room deleted" });
});

/* -------------------------------
   TOGGLE AVAILABILITY
--------------------------------*/
router.patch("/:id/availability", async (req, res) => {
  const { id } = req.params;
  const { available } = req.body;

  const { error } = await supabase
    .from("rooms")
    .update({ available })
    .eq("id", id);

  if (error) return res.status(400).json({ error });
  res.json({ message: "Availability updated" });
});

export default router;
