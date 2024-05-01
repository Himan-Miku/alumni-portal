import { Router } from "express";
import {
  LikeComment,
  ShowComments,
  ShowThread,
  comments,
  createThread,
  likes,
} from "../controllers/ThreadController";
// import { isAuthenticated } from "../middlewares/Auth";

let router = Router();

router.route("/thread").post(createThread);
router.route("/showthread").get(ShowThread);
router.route("/thread/likes/:tid").post(likes);
router.route("/thread/:tid/comment/:cid/").post(LikeComment);
router.route("/thread/comment/:tid").post(comments).get(ShowComments);

export default router;
