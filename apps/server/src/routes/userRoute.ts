import { Router } from "express";
import {
  AddUser,
  SearchUser,
  append,
  deleteUser,
  login,
  selfinfo,
  updateUser,
} from "../controllers/UserController";
import { isAuthenticated } from "../middlewares/Auth";
import handler from "../utils/temp";

let router = Router();

router.route("/signup").post(AddUser);
router.route("/login").post(login);
router.route("/users").get(isAuthenticated, SearchUser);
router
  .route("/user")
  .get(isAuthenticated, selfinfo)
  .put(isAuthenticated, updateUser)
  .delete(isAuthenticated, deleteUser);
router.route("/append").post(isAuthenticated, append);
export default router;
