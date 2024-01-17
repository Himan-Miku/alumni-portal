import { Router } from "express";
import {
  AddUser,
  SearchUser,
  UpdateFollow,
  append,
  deleteObj,
  deleteUser,
  getUser,
  login,
  selfinfo,
  updateIndividuals,
  updateUser,
} from "../controllers/UserController";
import { isAuthenticated } from "../middlewares/Auth";
import handler from "../utils/temp";

let router = Router();

router.route("/signup").post(AddUser);
router.route("/login").post(login);
router.route("/users").get(SearchUser);
router
  .route("/user")
  .get(isAuthenticated, selfinfo)
  .put(isAuthenticated, updateUser)
  .delete(isAuthenticated, deleteUser);
router.route("/user/:_id").get(getUser);
router.route("/follow/:id").put(isAuthenticated, UpdateFollow);
router.route("/append").post(isAuthenticated, append);
router
  .route("/objupdate/:id")
  .put(isAuthenticated, updateIndividuals)
  .delete(isAuthenticated, deleteObj);
export default router;
