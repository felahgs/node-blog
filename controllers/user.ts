import { NextFunction, Request, Response } from "express";
import * as userService from "@/services/user";

export function listUsers(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const users = userService.listUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

export function getUser(req: Request, res: Response, next: NextFunction): void {
  const userId = req.params.userId;

  try {
    const user = userService.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}
