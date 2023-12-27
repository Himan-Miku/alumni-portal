import { Router } from "express";
import { AddStudents } from "../controllers/UserController";
let router = Router();

router.route("/signup").post(AddStudents);

export default router;
