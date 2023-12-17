import mongoose, { MongooseError } from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoConnection = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(`Mongo running at : ${mongoConnection.connection.name}`);
  } catch (error) {
    if (error instanceof MongooseError) {
      console.log(error.message);
    } else {
      console.log("Unknown Error while connecting to Mongo", error);
    }
  }
};

export default connectDB;
