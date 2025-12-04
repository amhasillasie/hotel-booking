import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import roomsRoutes from "./routes/rooms.js";
import bookingsRoutes from "./routes/booking.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes 
app.use("/api/rooms", roomsRoutes);
app.use("/api/bookings", bookingsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
