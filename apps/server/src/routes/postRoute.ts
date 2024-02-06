import { Router } from "express";
import {
  ShowPost,
  comments,
  createPost,
  likes,
} from "../controllers/PostController";
// import { isAuthenticated } from "../middlewares/Auth";

let router = Router();

router.route("/post").post(createPost);
router.route("/showpost").get(ShowPost);
router.route("/likes/:_id").post(likes);
router.route("/comment/:_id").post(comments);

export default router;
