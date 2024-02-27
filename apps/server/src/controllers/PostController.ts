import catchAsyncError from "../middlewares/catchAsyncError";
import Post from "../models/PostModel";
import User from "../models/UserModel";
import { Response, NextFunction } from "express";
import { IReq, IRes } from "../utils/Types";
import mongoose from "mongoose";
import { ApiFeatures } from "../utils/ApiFeatures";

type receivedBody = {
  user: string;
  mediaUrl: string;
  description: string;
};

export const ShowPost = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let apifeat = !req.query.limit
      ? new ApiFeatures(Post.find().populate("Uid"), req).search()
      : new ApiFeatures(Post.find().populate("Uid"), req)
          .search()
          .pagination(Number(req.query.limit!));
    let post = await apifeat.query;
    // console.log(req.query, post);

    res.status(200).json({
      success: true,
      post,
    });
  },
);

export const createPost = catchAsyncError(
  async (req: IReq, res: Response, next: NextFunction) => {
    const body = req.body as receivedBody;
    const { mediaUrl, description } = body;
    try {
      const user = await User.findOne({ _id: req.body._id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      // console.log("here");
      const post = await Post.create({
        Uid: user?._id,
        description: description,
        media: [mediaUrl],
      });
      // console.log("Post created in mongodb: ", post);

      res
        .status(200)
        .json({ message: "Media uploaded successfully", success: true, post });
    } catch (error) {
      console.error("Error uploading media to mongodb: ", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
);

export const likes = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let post = await Post.findOne({ ...req.params });

    req.query.action == "add" &&
      post?.likes.filter((elem) => {
        return String(elem) == String(req?.body._id);
      }).length == 0 &&
      post?.likes.push(req?.body._id);

    if (req.query.action == "remove") {
      let temp = post?.likes.filter((elem) => {
        return String(elem) != String(req?.body._id);
      })!;
      post!.likes = temp;
    }
    await post?.save();
    // console.log(post);
    res.status(200).json({
      success: true,
      likes: post?.likes?.length,
    });
  },
);
export const comments = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let post = await Post.findOne({ ...req.params });
    let { text } = req.body;

    let comment = {
      text: text,
      owner: req?.body?._id,
    };
    post?.comments?.push(comment);
    await post?.save();
    res.status(201).json({
      success: true,
      data: comment,
    });
  },
);
