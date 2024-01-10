import jwt, { JwtPayload } from "jsonwebtoken";
import catchAsyncError from "./catchAsyncError";

import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import User from "../models/UserModel";
import { getToken } from "next-auth/jwt";

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
    let user: any = {};
    const { token } = req.cookies;

    // console.log(token);
    if (!token) {
      const secret = process.env.NEXTAUTH_SECRET;
      const Nexttoken = await getToken({ req, secret });
      // console.log(req.cookies["next-auth.session-token"]);
      if (!Nexttoken) {
        return next(new ErrorHandler("No user found", 404));
      }
      // console.log(Nexttoken);
      // res.end();
      user = await User?.findOne({ email: Nexttoken?.email });
      // console.log("got ", user);
    } else {
      const key = process.env.JWT_SECRET_KEY || "";
      const DecodedData = jwt.verify(token, key) as TokenDecoded;

      user = await User.findOne({ _id: DecodedData.id });
    }
    if (!user) {
      return next(new ErrorHandler("Invalid User", 401));
    }
    req.user = user;
    next();
  }
);
