import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
        duration: String,
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
let expire = process.env.JWT_EXPIRE || "4d";

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
