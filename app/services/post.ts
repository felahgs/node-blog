import postJson from "@/data/posts.json";
import { PostData } from "@/data/types";
import { NotFoundError } from "@/errors/NotFoundError";
import prisma from "prisma/prismaClient";

const data = postJson;
export async function listPosts() {
  const posts = prisma.post.findMany({
    orderBy: [{ createdAt: "desc" }],
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return posts;
}

export async function getPost(postId: string): Promise<PostData> {
  const post = data.find((post) => post.id === postId);

  if (!post) {
    throw new NotFoundError(`Post with id "${postId}" not found.`);
  }

  return Promise.resolve(post);
}
