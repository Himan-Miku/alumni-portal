import jwt, { JwtPayload } from "jsonwebtoken";
import catchAsyncError from "./catchAsyncError";

import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import User from "../models/UserModel";

interface IReq extends Request {
  user?: any;
}
interface Ires extends Response {
  user?: any;
}
interface TokenDecoded extends JwtPayload {
  id?: string;
}
export const isAuthenticated = catchAsyncError(
  async (req: IReq, res: Response, next: NextFunction) => {
    const { token } = req.cookies;
    if (!token) {
      return next(new ErrorHandler("Please Login First", 401));
    }
    const key = process.env.JWT_SECRET_KEY || "";
    const DecodedData = jwt.verify(token, key) as TokenDecoded;

    const user = await User.findOne({ _id: DecodedData.id });
    if (!user) {
      return next(new ErrorHandler("Invalid User", 401));
    }
    req.user = user;
    next();
  }
);
