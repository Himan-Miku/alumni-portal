import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute";
import postRoutes from "./routes/postRoute";

const app = express();
//cookie body and encoded url configurations
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//defining all routes here
app.use("/api", userRoutes, postRoutes);

export default app;
