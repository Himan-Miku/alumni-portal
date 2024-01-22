import { CookieOptions, Request, Response } from "express";

let sendToken = (user: any, statuscode: number, res: Response) => {
  const token = user.getJwtToken();
  const cookieexpire = Number(process.env.COOKIE_EXPIRE) || 5;

  //
  const options: CookieOptions = {
    expires: new Date(Date.now() + cookieexpire * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  res.cookie("token", token, options).status(statuscode).json({
    success: true,
    user,
    token,
  });
};
export default sendToken;
