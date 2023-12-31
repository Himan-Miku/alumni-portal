import { Router } from "express";
import {
  AddUser,
  deleteUser,
  login,
  updateUser,
} from "../controllers/UserController";
import { isAuthenticated } from "../middlewares/Auth";

let router = Router();

router.route("/signup").post(AddUser);
router.route("/login").post(login);
router.route("/user").put(isAuthenticated, updateUser).delete(deleteUser);

export default router;
