import { Router } from "express";
import { createPost } from "../controllers/PostController";
import { isAuthenticated } from "../middlewares/Auth";

let router = Router();

router.route("/post").post(isAuthenticated, createPost);

export default router;
