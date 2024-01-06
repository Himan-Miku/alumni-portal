import mongoose, { MongooseError } from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoUrl =
    process.env.NODE_ENV === "production"
      ? process.env.MONGODB_PRODUCTION_URI!
      : `mongodb://root:password@localhost:27017/${process.env.DB_NAME}`;

  try {
    const mongoConnection = await mongoose.connect(mongoUrl);
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
