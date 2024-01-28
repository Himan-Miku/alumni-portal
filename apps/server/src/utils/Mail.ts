import nodemailer from "nodemailer";
import { Interface } from "readline";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});
interface Prop {
  recievermail: string;
  hash: string;
  id: string;
}
export async function SendMail(prop: Prop) {
  // console.log(prop?.recievermail);
  const info = await transporter.sendMail({
    from: process.env.SMTP_MAIL,
    to: prop?.recievermail,
    subject: "Alumni Portal :: Recovery Of Your Account",
    text: `Hello There. You Have Requested For Password Recovery .. Please Click on Above Link to Recover your Account : ${process.env.FRONTEND_URL}/forgotpassword?token=${prop?.hash}&_id=${prop?.id}`,
    html: `<div><h3>Hello There. You Have Requested For Password Recovery ..</h3><h4> Please Click on Above Link to Recover your Account : ${process.env.FRONTEND_URL}/forgotpassword?token=${prop?.hash}&_id=${prop?.id}</h4></div>`,
  });
  return info;
}

// SendMail();
