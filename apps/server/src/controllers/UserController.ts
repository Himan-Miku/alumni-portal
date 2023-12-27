import { NextFunction } from "express";
import catchAsyncError from "../middlewares/catchAsyncError";
import User from "../models/UserModel";
import { Request, Response } from "express";

export const AddStudents = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const user = await User.create({ ...req.body });
    console.log(user);
    res.status(200).json({
      success: true,
      user,
    });
  }
);
