import mongoose, { Schema, model, models } from "mongoose";

import { User } from "../app/types";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    posts: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
        },
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    about: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      // required: true,
    },
    education: [
      {
        studyfrom: String,
        studied: String,
        duration: {
          start: Date,
          end: Date,
        },
        percentage: String,
      },
    ],
    work: [
      {
        company: String,
        position: String,
        duration: String,
      },
    ],
    dob: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    image: {
      type: String,
    },
    userType: {
      type: String,
      enum: ["Student", "Alumni"],
    },
  },
  {
    timestamps: true,
  }
);

const UserModel =
  (models.User as mongoose.Model<User>) || model<User>("User", userSchema);
export default UserModel;
