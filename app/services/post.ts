import postJson from "@/data/posts.json";
import { PostData } from "@/data/types";
import { NotFoundError } from "@/errors/NotFoundError";

const data = postJson;

export async function listPosts(): Promise<PostData[]> {
  return Promise.resolve(data);
}

export async function getPost(postId: string): Promise<PostData> {
  const post = data.find((post) => post.id === postId);

  if (!post) {
    throw new NotFoundError(`Post with id "${postId}" not found.`);
  }

  return Promise.resolve(post);
}
