import { NextFunction, Request, Response } from "express";
import * as userService from "@/services/user";

export async function listUsers(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

export async function getUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const userId = req.params.userId;

  try {
    const user = await userService.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}
