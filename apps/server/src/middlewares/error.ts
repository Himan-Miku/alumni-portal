import ErrorHandler from "../utils/ErrorHandler";
import { Request, Response, NextFunction } from "express";
import createError, { HttpError } from "http-errors";

module.exports = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal error";

  if (err.name == "CastError") {
    const message = "Resource not found .invalid :" + `${err.stack}`;
    err = new ErrorHandler(message, 400);
  }
  res.status(404).json({
    success: false,
    message: err.message,
  });
};
