import { Request, Response, NextFunction } from "express";
export interface IReq extends Request {
  user: any;
}
export interface IRes extends Response {
  user: any;
}
