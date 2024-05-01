import catchAsyncError from "../middlewares/catchAsyncError";
import Thread from "../models/ThreadModel";
import User from "../models/UserModel";
import { Response, NextFunction } from "express";
import { IReq, IRes } from "../utils/Types";

import { ApiFeatures } from "../utils/ApiFeatures";
import ErrorHandler from "../utils/ErrorHandler";

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
    let thread = await Thread.findOne({ _id: req.params.tid });

    if (req.query.action == "add") {
      if (!thread?.likes?.includes(req?.body?._id)) {
        thread?.likes.push(req?.body._id);
        await thread?.save();
        res.status(200).json({
          success: true,
          likes: thread?.likes?.length,
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Already Liked",
        });
      }
    } else {
      if (req.query.action == "remove") {
        let temp = thread?.likes.filter((elem) => {
          return String(elem) != String(req?.body._id);
        })!;
        thread!.likes = temp;
        await thread?.save();
        res.status(200).json({
          success: true,
          likes: thread?.likes?.length,
        });
      }
    }

    // console.log(post);
    // if(req?.query?.action=="add")
  }
);
export const ShowComments = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let thread = await Thread?.findById(req.params?.tid, {
      comments: 1,
    }).populate("comments.owner");
    if (!thread) {
      return next(new ErrorHandler("Invalid thread id", 400));
    }
    res.status(200).json({
      success: true,
      comments: thread?.comments,
    });
  }
);

export const LikeComment = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    const { tid, cid } = req.params;
    const thread = await Thread.findOne({ _id: tid });

    if (!thread) {
      return next(new ErrorHandler("Thread Not Found", 404));
    }
    let Comment = thread?.comments?.filter(
      (ele) => ele?._id?.toString() == cid
    )[0];

    if (!Comment) {
      return next(new ErrorHandler("Invalid Comment", 404));
    }

    if (req.query?.action == "add") {
      if (Comment?.likes?.includes(req?.body?._id)) {
        return next(new ErrorHandler("Already Liked", 400));
      }
      Comment?.likes?.push(req?.body?._id);
    } else {
      if (!Comment?.likes?.includes(req?.body?._id)) {
        return next(new ErrorHandler("Already Disliked", 400));
      }
      Comment.likes = Comment?.likes?.filter((ele) => {
        return ele != req?.body?._id;
      });
      // console.log(
      //   Comment?.likes?.filter((ele) => ele == req?.body?._id).length
      // );
    }

    // await Comment?.save();
    await thread?.save();

    res?.status(200).json({
      success: true,
      message: "Successfully performed",
      Comment,
    });
  }
);

export const comments = catchAsyncError(
  async (req: IReq, res: IRes, next: NextFunction) => {
    let thread = await Thread.findOne({ _id: req.params.tid });
    let { text } = req.body;

    let comment = {
      text: text,
      owner: req?.body?._id,
    };
    thread?.comments?.push(comment);
    await thread?.save();
    const newCommentId = thread?.comments[thread?.comments.length - 1]._id;
    res.status(201).json({
      success: true,
      data: { ...comment, _id: newCommentId },
    });
  }
);
