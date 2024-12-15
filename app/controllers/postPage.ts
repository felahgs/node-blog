import { NextFunction, Request, Response } from "express";
import * as postService from "@/services/post";

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
    next(error);
  }
}
