import connectDB from "./config/database";
import dotenv from "dotenv";

import { Server } from "http";

//handling uncaught exception
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception thrown :", err.message);
  console.warn("shutting down server");
  process.exit(1);
});
dotenv.config();
// import { setCorsOptions } from "./utils/s3Operations";

import app from "./app";
// setCorsOptions();
const PORT = process.env.PORT ? process.env.PORT : 8000;

connectDB();
let server = new Server();
app.listen(PORT, () => {
  console.log(`Server running on the PORT:${PORT}`);
});
//unhandled rejection handling
process.on("unhandledRejection", (err: Error) => {
  console.log(`Error:`, err.message);
  console.log("Shutting down the server");

  server.close(() => {
    process.exit(1);
  });
});
