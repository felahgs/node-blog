import { NextFunction, Request, Response } from "express";

import { dateFromNow } from "@/utils/dates";

import * as postService from "@/services/post";
import { format } from "date-fns";

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
      format: format,
    });
  } catch (error) {
    next(error);
  }
}
