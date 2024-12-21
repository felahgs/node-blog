import { NextFunction, Request, Response } from "express";
import * as postService from "@/services/post";
import { formatDate } from "@/utils/dates";

export async function renderPostPage(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const { postId } = req.params;
    const post = await postService.getPost(postId);
    if (!post) {
      res
        .status(404)
        .render("not-found", { path: req.originalUrl, pageTitle: "Not Found" });
    }

    res.status(200).render("post", {
      pageTitle: post?.title,
      post: post,
      formatDate: formatDate,
    });
  } catch (error) {
    next(error);
  }
}
