import { HttpError } from "http-errors";

class ErrorHandler extends HttpError {
  constructor(message: string, statuscode: number) {
    super(message);
    this.statusCode = statuscode;
    this.message = message;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
