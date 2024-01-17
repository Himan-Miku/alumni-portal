import connectDB from "lib/Connection";
import { NextResponse } from "next/server";
import User from "schemas/User";

export async function POST(req: Request) {
  const { name, email } = await req.json();
  await connectDB();
  let user = await User.create({ name, email });
  return NextResponse.json(
    { message: "User Registered", user },
    { status: 201 }
  );
}
