import { NextFunction, Request, Response } from "express";
import * as postService from "@/services/post";

export function listPosts(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const posts = postService.listPosts();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
}

export function getPost(req: Request, res: Response, next: NextFunction): void {
  const postId = req.params.postId;

  try {
    const post = postService.getPost(postId);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}
