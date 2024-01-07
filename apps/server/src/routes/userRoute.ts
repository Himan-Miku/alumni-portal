import { Router } from "express";
import {
  AddUser,
  SearchUser,
  deleteUser,
  login,
  updateUser,
} from "../controllers/UserController";
import { isAuthenticated } from "../middlewares/Auth";

let router = Router();

router.route("/signup").post(AddUser);
router.route("/login").post(login);
router.route("/users").get(SearchUser);
router.route("/user").put(isAuthenticated, updateUser).delete(deleteUser);

export default router;
