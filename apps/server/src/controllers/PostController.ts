import { NextFunction, Request, Response } from "express";
import catchAsyncError from "../middlewares/catchAsyncError";
import Post from "../models/PostModel";
import User from "../models/UserModel";

type receivedBody = {
  user: string;
  mediaUrl: string;
  description: string;
};

export const createPost = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as receivedBody;
    const { user, mediaUrl, description } = body;
    console.log(body.mediaUrl);

    try {
      const user = await User.findOne({ name: body.user });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const post = await Post.create({
        madeBy: user,
        description,
        media: [mediaUrl],
        likes: 30,
      });

      console.log("Post created in mongodb: ", post);

      res
        .status(200)
        .json({ message: "Media uploaded successfully", success: true, post });
    } catch (error) {
      console.error("Error uploading media to mongodb: ", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);
