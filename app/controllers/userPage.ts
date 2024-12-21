import { NextFunction, Request, Response } from "express";
import * as userService from "@/services/user";
import { dateFromNow, formatDate } from "@/utils/dates";

export async function renderUserPage(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const { userId } = req.params;
    const user = await userService.getUser(userId);
    if (!user) {
      res
        .status(404)
        .render("not-found", { path: req.originalUrl, pageTitle: "Not Found" });
    }

    res.status(200).render("user", {
      pageTitle: user?.name,
      user: user,
      formatDate: formatDate,
      dateFromNow: dateFromNow,
    });
  } catch (error) {
    next(error);
  }
}
