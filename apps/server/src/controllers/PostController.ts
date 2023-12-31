import { NextFunction, Request, Response } from "express";
import catchAsyncError from "../middlewares/catchAsyncError";
import Post from "../models/PostModel";

export const createPost = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const post = await Post.create({ ...req.body });
    console.log(post);
    res.status(200).json({
      success: true,
      post,
    });
  }
);


