import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute";
import postRoutes from "./routes/postRoute";

import errorfn from "./middlewares/error";

import metadataRoutes from "./routes/metadataRoute";
import cors from "cors";


const app = express();
//cookie body and encoded url configurations
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials:true
  })
);

//defining all routes here
app.use("/api", userRoutes, postRoutes, metadataRoutes);

//error middleware
app.use(errorfn);

export default app;
