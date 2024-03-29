/* eslint-disable turbo/no-undeclared-env-vars */
"use server";

import mongoose, { MongooseError } from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoUrl = process.env.MONGODB_PRODUCTION_URI!;
  console.log("mongo", mongoUrl);
  try {
    const mongoConnection = await mongoose.connect(mongoUrl);
  } catch (error) {
    if (error instanceof MongooseError) {
      console.log(error.message);
    } else {
      console.log("Unknown Error while connecting to Mongo", error);
    }
  }
};

export default connectDB;
