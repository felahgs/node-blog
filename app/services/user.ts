import prisma from "@/../prisma/prismaClient";

export function listUsers() {
  const users = prisma.user.findMany({
    orderBy: [{ joined_date: "desc" }],
  });

  return users;
}

export function getUser(userId: string) {
  const user = prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
    include: {
      posts: true,
    },
  });

  return user;
}
