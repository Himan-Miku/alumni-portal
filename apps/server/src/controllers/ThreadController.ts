import catchAsyncError from "../middlewares/catchAsyncError";
import Thread from "../models/ThreadModel";
import User from "../models/UserModel";
import { Response, NextFunction } from "express";
import { IReq, IRes } from "../utils/Types";

import { ApiFeatures } from "../utils/ApiFeatures";

type receivedBody = {
  user: string;
  threadText: string;
};

export const ShowThread = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let apifeat = !req.query.limit
      ? new ApiFeatures(Thread.find().populate("Uid"), req).search()
      : new ApiFeatures(Thread.find().populate("Uid"), req)
          .search()
          .pagination(Number(req.query.limit!));
    let threads = await apifeat.query;
    res.status(200).json({
      success: true,
      threads,
    });
  }
);

export const createThread = catchAsyncError(
  async (req: IReq, res: Response, next: NextFunction) => {
    const body = req.body as receivedBody;
    const { threadText } = body;
    try {
      const user = await User.findOne({ _id: req.body._id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      // console.log("here");
      const thread = await Thread.create({
        Uid: user?._id,
        thread: threadText,
      });
      // console.log("Post created in mongodb: ", post);

      res
        .status(200)
        .json({ message: "Thread Posted Successfully", success: true, thread });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export const likes = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let thread = await Thread.findOne({ ...req.params });

    req.query.action == "add" &&
      thread?.likes.filter((elem) => {
        return String(elem) == String(req?.body._id);
      }).length == 0 &&
      thread?.likes.push(req?.body._id);

    if (req.query.action == "remove") {
      let temp = thread?.likes.filter((elem) => {
        return String(elem) != String(req?.body._id);
      })!;
      thread!.likes = temp;
    }
    await thread?.save();
    // console.log(post);
    res.status(200).json({
      success: true,
      likes: thread?.likes?.length,
    });
  }
);
export const comments = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let thread = await Thread.findOne({ ...req.params });
    let { text } = req.body;

    let comment = {
      text: text,
      owner: req?.body?._id,
    };
    thread?.comments?.push(comment);
    await thread?.save();
    res.status(201).json({
      success: true,
      data: comment,
    });
  }
);
