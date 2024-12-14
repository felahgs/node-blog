import userJson from "@/data/users.json";
import { UserData } from "@/data/types";
import { NotFoundError } from "@/errors/NotFoundError";

const data = userJson;

export function listUsers(): UserData[] {
  return data;
}

export function getUser(userId: string): UserData {
  const user = data.find((user) => user.id === userId);

  if (!user) {
    throw new NotFoundError(`User with id "${userId}" not found.`);
  }

  return user;
}
