import { Router } from "express";
import {
  AddUser,
  ForgetPassword,
  PopulatedFollowings,
  SearchUser,
  UpdateFollow,
  append,
  deleteObj,
  deleteUser,
  getUser,
  getUserByEmail,
  login,
  recoverPassword,
  selfinfo,
  updateIndividuals,
  updateUser,
} from "../controllers/UserController";
// import { isAuthenticated } from "../middlewares/Auth";
import handler from "../utils/temp";

let router = Router();

router.route("/signup").post(AddUser);
router.route("/login").post(login);
router.route("/users").get(SearchUser);
router.route("/user").get(selfinfo).put(updateUser).delete(deleteUser);
router.route("/objdelete/:id").put(deleteObj);
router.route("/followers/:id").get(PopulatedFollowings);
router.route("/user/:_id").get(getUser);
router.route("/follow/:id").put(UpdateFollow);
router.route("/append").post(append);
router.route("/objupdate/:id").put(updateIndividuals);
router.route("/user/email/:email").get(getUserByEmail);
router.route("/forgetpassword").get(ForgetPassword).post(recoverPassword);
export default router;
