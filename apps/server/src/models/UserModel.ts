import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";

interface Education {
  studyfrom: string;
  studied: string;
  duration: {
    start: Date;
    end?: Date;
  };
  percentage: string;
}

interface Work {
  company: string;
  position: string;
  duration: string;
}

interface Post {
  id: mongoose.Schema.Types.ObjectId;
}

interface IUser {
  compareTokens(token: string, next: NextFunction): boolean;
  getJwtToken(): boolean;
  name: string;
  posts: Post[];
  followers: mongoose.Schema.Types.ObjectId[];
  following: mongoose.Schema.Types.ObjectId[];
  about?: string;
  email: string;
  password?: string;
  education?: Education[];
  work?: Work[];
  dob?: Date;
  gender?: "Male" | "Female" | "Other";
  linkedin?: string;
  github?: string;
  image?: string;
  userType?: "Student" | "Alumni";
  resetPassToken?: string;
  resetPassExpire?: Date;
}

const userSchema = new mongoose.Schema<IUser>(
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
      required: true,
      validate: validator.isEmail,
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
    resetPassToken: String,
    resetPassExpire: Date,
  },
  {
    timestamps: true,
  },
);
let expire = process.env.JWT_EXPIRE || "4d";

userSchema.methods.compareTokens = function (
  token: string,
  next: NextFunction,
) {
  let date = new Date();
  let currentTime = date?.getMilliseconds();
  if (currentTime > this.resetPassExpire) {
    next(
      new ErrorHandler("Recovery Session Timed Out...Please retry again", 400),
    );
    return false;
  }
  return bcrypt.compare(this.resetPassToken, token);
};
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password!, 8);
  next();
});

userSchema.methods.getJwtToken = function () {
  let key = process.env.JWT_SECRET_KEY || "";
  return jwt.sign({ id: this._id }, key, {
    expiresIn: expire,
  });
};

const User = mongoose.model("User", userSchema);

export default User;
