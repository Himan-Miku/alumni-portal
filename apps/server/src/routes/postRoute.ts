import { Router } from "express";
import { createPost } from "../controllers/PostController";

let router = Router();

router.route("/post").post(createPost);

export default router;
