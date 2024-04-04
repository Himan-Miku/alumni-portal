import { Router } from "express";
import {
  ShowThread,
  comments,
  createThread,
  likes,
} from "../controllers/ThreadController";
// import { isAuthenticated } from "../middlewares/Auth";

let router = Router();

router.route("/thread").post(createThread);
router.route("/showthread").get(ShowThread);
router.route("/thread/likes/:_id").post(likes);
router.route("/post/comment/:_id").post(comments);

export default router;
