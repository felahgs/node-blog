import { NextFunction, Request, Response } from "express";
import * as postService from "@/services/post";
import { NotFoundError } from "@/errors";

export async function listPosts(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const posts = await postService.listPosts();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
}

export function getPost(req: Request, res: Response, next: NextFunction): void {
  const postId = req.params.postId;

  try {
    const post = postService.getPost(postId);
    if (!post) {
      throw new NotFoundError(`Post with id "${postId}" not found.`);
    }
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}
