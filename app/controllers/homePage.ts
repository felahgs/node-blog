import { NextFunction, Request, Response } from "express";

import { dateFromNow, formatDate } from "@/utils/dates";
import * as postService from "@/services/post";

export async function renderHomePage(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const posts = await postService.listPosts();
    res.status(200).render("home", {
      pageTitle: "Home",
      posts: posts,
      dateFromNow: dateFromNow,
      formatDate: formatDate,
    });
  } catch (error) {
    next(error);
  }
}
