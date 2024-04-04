import { NextFunction, Request, Response } from "express";
import catchAsyncError from "../middlewares/catchAsyncError";
import { getObjectUrl, putObject } from "../utils/s3Operations";

type receivedBody = {
  user: string;
  name: string;
  contentType: string;
  size: number;
};

type queryType = {
  objectKey: string;
  folderName: string;
};

export const getMetadata = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as receivedBody;
    const { user, name, contentType, size } = body;

    try {
      const { url: presingedUrl, objectKey } = await putObject(
        user,
        name,
        contentType
      );
      res.status(200).json({
        putUri: presingedUrl,
        user,
        objectKey,
      });
    } catch (error) {
      console.log("Error while sending putUri to frontend: ", error);
      res.status(500).json({
        message: "Something went wrong while sending putUri url to frontend",
      });
    }
  }
);

export const sendMediaUrl = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { folderName, objectKey } = req.query as queryType;
    const key = folderName + "/" + objectKey;
    try {
      const presingedUrl = await getObjectUrl(key);
      res.status(200).json({
        getUri: presingedUrl,
      });
    } catch (error) {
      console.log("Error while sending getUri to frontend: ", error);
      res.status(500).json({
        message: "Something went wrong while sending getUri url to frontend",
      });
    }
  }
);
