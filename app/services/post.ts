import postJson from "@/data/posts.json";
import { PostData } from "@/data/types";
import { NotFoundError } from "@/errors/NotFoundError";

const data = postJson;

export function listPosts(): PostData[] {
  return data;
}

export function getPost(postId: string): PostData {
  const post = data.find((post) => post.id === postId);

  if (!post) {
    throw new NotFoundError(`Post with id "${postId}" not found.`);
  }

  return post;
}
