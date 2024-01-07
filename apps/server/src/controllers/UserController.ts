import { NextFunction } from "express";
import catchAsyncError from "../middlewares/catchAsyncError";
import User from "../models/UserModel";
import { Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import comparePassword from "../utils/PassCheck";

import sendToken from "../utils/jwtToken";
import { IReq, IRes } from "../utils/Types";
import { ApiFeatures } from "../utils/ApiFeatures";

export const AddUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create({ ...req.body });
    res.status(201).json({
      success: true,
      user,
    });
  }
);

export const login = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    let { email, password } = req.body;
    console.log(email);
    if (!email || !password)
      return next(new ErrorHandler("Email and Password are required", 400));
    const user = await User.findOne({ email: email });
    if (!user) {
      return next(new ErrorHandler("Email and Password are invalid", 400));
    }
    const isValid = await comparePassword(password, user?.password);
    if (!isValid) {
      return next(new ErrorHandler("Email and Password are invalid", 400));
    }
    sendToken(user, 201, res);
  }
);

export const updateUser = catchAsyncError(
  async (req: IReq, res: Response, next: NextFunction) => {
    let user = await User.updateOne({ _id: req.user._id }, { ...req.body });
    res.status(201).json({
      success: true,
      user,
    });
  }
);

export const SearchUser = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let apifeat = new ApiFeatures(User.find(), req).search();
    let user = await apifeat.query;

    res.status(200).json({
      success: true,
      user,
    });
  }
);

export const deleteUser = catchAsyncError(
  async (req: IReq, res: Response, next: NextFunction) => {
    let user = await User.deleteOne({ _id: req.user._id });
    res.status(201).json({
      success: true,
      user,
    });
  }
);
