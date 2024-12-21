import prisma from "prisma/prismaClient";

export function listPosts() {
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

export async function getPost(postId: string | number) {
  const post = prisma.post.findFirst({
    where: {
      id: Number(postId),
    },
    include: {
      author: {
        select: {
          name: true,
          avatar: true,
        },
      },
    },
  });

  return post;
}
