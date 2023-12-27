import connectDB from "./config/database";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();
const PORT = process.env.PORT ? process.env.PORT : 8000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
