import express from "express";
import connectDB from "./config/database";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 8000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});

console.log("Basement is empty 💀");
