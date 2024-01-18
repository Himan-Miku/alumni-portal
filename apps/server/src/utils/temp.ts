import { getToken } from "next-auth/jwt";
import { IReq, IRes } from "./Types";
import catchAsyncError from "../middlewares/catchAsyncError";
import jwt from "jsonwebtoken";


const handler = catchAsyncError(async (req: IReq, res: IRes) => {
  
  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({ req, secret });
    console.log("JSON Web Token", token?.email);
  // let temp = req.cookies["next-auth.session-token"];
  // console.log(temp);
  // const newdec = jwt.verify(temp, process.env.JWT_SECRET_KEY!);
  // console.log("hii", newdec);
  res.end();
});

export default handler;
