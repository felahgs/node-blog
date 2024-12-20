import { NextFunction, Request, Response } from "express";
import * as postService from "@/services/post";
import { NotFoundError } from "@/errors";

export async function renderPostPage(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const { postId } = req.params;
    const post = await postService.getPost(postId);
    res.status(200).render("post", { pageTitle: post.title, post: post });
  } catch (error) {
    if (error instanceof NotFoundError) {
      res
        .status(404)
        .render("not-found", { path: req.originalUrl, pageTitle: "Not Found" });
    } else {
      next(error);
    }
  }
}
