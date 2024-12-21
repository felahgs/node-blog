import prisma from "@/../prisma/prismaClient";

export function listPosts() {
  const posts = prisma.post.findMany({
    orderBy: [{ createdAt: "desc" }],
    include: {
      author: {
        select: {
          name: true,
          id: true,
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
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });

  return post;
}
