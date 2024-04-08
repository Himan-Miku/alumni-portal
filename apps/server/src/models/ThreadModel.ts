import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const ThreadSchema = new mongoose.Schema(
  {
    Uid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    thread: {
      type: String,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [CommentSchema],
  },
  {
    timestamps: true,
  },
);

const Thread = mongoose.model("Thread", ThreadSchema);

export default Thread;
