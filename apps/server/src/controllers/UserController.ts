import { NextFunction } from "express";
import catchAsyncError from "../middlewares/catchAsyncError";
import User from "../models/UserModel";
import { Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import comparePassword from "../utils/PassCheck";

import sendToken from "../utils/jwtToken";
import { IReq, IRes } from "../utils/Types";
import { ApiFeatures } from "../utils/ApiFeatures";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { SendMail } from "../utils/Mail";

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
    const isValid = await comparePassword(password, user?.password!);
    if (!isValid) {
      return next(new ErrorHandler("Email and Password are invalid", 400));
    }
    sendToken(user, 201, res);
  }
);

export const UpdateFollow = catchAsyncError(
  async (req: IReq, res: Response, next: NextFunction) => {
    const user = await User?.findOne({ _id: req.user?._id });
    const followUser = await User?.findOne({ _id: req.params.id });
    const isFollowing =
      user?.following.filter((ele) => {
        return String(ele) == req.params.id!;
      }).length != 0;
    // console.log(isFollowing);

    // if (isFollowing) {
    //   user!.following =
    //     user?.following.filter((ele) => {
    //       return String(ele._id) != String(req.params.id!);
    //     }) || [];
    //   followUser!.followers =
    //     followUser?.followers.filter((ele) => {
    //       return String(ele._id) != String(req.user._id!);
    //     }) || [];

    //   // res.end();
    // } else {
    //   user?.following.push(new mongoose.Types.ObjectId(req.params.id!));
    //   followUser?.followers.push(new mongoose.Types.ObjectId(req.user._id));
    // }
    await user?.save();
    await followUser?.save();
    res.status(200).json({
      success: true,
      Message: `${
        isFollowing ? "UnFollowed" : "Following"
      } ${followUser?.name}`,
    });
  }
);

export const updateUser = catchAsyncError(
  async (req: IReq, res: Response, next: NextFunction) => {
    let user = await User.updateOne({ _id: req.user?._id }, { ...req.body });
    res.status(201).json({
      success: true,
      user,
    });
  }
);
export const append = catchAsyncError(
  async (req: IReq, res: Response, next: NextFunction) => {
    const user = await User.findOne(req?.user?._id);
    if (!user) return next(new ErrorHandler("No such user found", 404));
    console.log(req?.body);
    // console.log(req.body);
    req.query.key == "exp" && user?.work?.push(req.body);
    req.query.key == "edu" && user?.education?.push(req.body);
    let resp = await user.save();

    res.status(200).json({
      success: true,
      // resp,
    });
  }
);

export const PopulatedFollowings = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    const user = await User.findOne(
      { _id: req?.user?._id },
      { followers: 1, following: 1 }
    ).populate(["followers", "following"]);

    res?.status(200).json({
      success: true,
      user,
    });
  }
);

export const updateIndividuals = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    const user =
      req.query.key == "exp"
        ? await User?.updateOne(
            { _id: req.user?._id, "work._id": req.params.id },
            {
              $set: {
                "work.$.company": req.body.company,
                "work.$.position": req.body.position,
                "work.$.duration": req.body.duration,
              },
            }
          )
        : req.query.key == "edu" &&
          (await User?.updateOne(
            { _id: req.user?._id, "education._id": req.params.id },
            {
              $set: {
                "education.$.studyfrom": req.body.studyfrom,
                "education.$.studied": req.body.studied,
                "education.$.percentage": req.body.percentage,
                "education.$.duration": req.body.duration,
              },
            }
          ));
    // console.log(user);
    // console.log(user);
    res.status(200).json({
      success: true,
      user,
    });
  }
);

export const deleteObj = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    const user =
      req.query.key == "exp"
        ? await User?.updateOne(
            {
              _id: req.user?._id,
            },
            { $pull: { work: { _id: req.params.id } } }
          )
        : await User?.updateOne(
            {
              _id: req.user?._id,
            },
            { $pull: { education: { _id: req.params.id } } }
          );
    res.status(200).json({
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
export const ForgetPassword = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(10));

    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 2);

    let user = await User?.findOneAndUpdate(
      { email: req?.query?.email },
      { resetPassToken: hash, resetPassExpire: expirationTime },
      { new: true }
    );
    if (!user) return next(new ErrorHandler("No such user found", 404));
    SendMail({
      recievermail: user?.email,
      hash: resetToken,
      id: String(user?._id),
    });
    res.status(200).json({
      success: true,
      message: "Recovery Mail Sent Successfully to " + user?.email,
    });
  }
);

export const recoverPassword = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let { password, confirmPassword, token, _id } = req.body;
    //check validations
    // let user = await User?.findById(_id);

    // if (!user) {
    //   return next(new ErrorHandler("Invalid User", 401));
    // }
    // if (!user?.compareTokens(token, next)) {
    //   return next(new ErrorHandler("Invalid Token Found", 404));
    // }
    // if (password !== confirmPassword) {
    //   return next(
    //     new ErrorHandler("Password And Confirmed Password Didnt Matched", 400)
    //   );
    // }
    // let hash = await bcrypt.hash(password, 8);
    // let save = await User?.findByIdAndUpdate(_id, {
    //   password: hash,
    //   resetPassToken: null,
    //   resetPassExpire: null,
    // });
    // // console.log(save);
    res?.status(200).json({
      success: true,
      message: "Password Changed Successfully",
      // save,
    });
  }
);
export const getUser = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let user = await User.findOne({ _id: req.params._id });
    if (!user) return next(new ErrorHandler("No User Found", 404));

    res.status(200).json({
      success: true,
      user,
    });
  }
);

export const selfinfo = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let data = await User?.findOne({ _id: req.user?._id });
    if (!data) {
      return next(new ErrorHandler("No user found ", 404));
    }
    res.status(200).json({
      success: true,
      user: data,
    });
  }
);

export const deleteUser = catchAsyncError(
  async (req: IReq, res: Response, next: NextFunction) => {
    let user = await User.deleteOne({ _id: req.user?._id });
    res.status(201).json({
      success: true,
      user,
    });
  }
);
