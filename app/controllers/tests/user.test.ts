import { Request, Response, NextFunction } from "express";
import * as userService from "@/services/user";
import { listUsers, getUser } from "../user";

jest.mock("@/services/user");

describe("listUsers", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  const mockUsers = [
    {
      id: "1",
      name: "John Doe",
    },
  ];

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
  });

  it("should return a list of users with status 200", async () => {
    (userService.listUsers as jest.Mock).mockResolvedValue(mockUsers);

    await listUsers(req as Request, res as Response, next);

    expect(userService.listUsers).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUsers);
  });

  describe("getUser", () => {
    it("should return a user with status 200", async () => {
      const mockUser = mockUsers[0];
      req.params = { userId: "1" };
      (userService.getUser as jest.Mock).mockResolvedValue(mockUser);

      await getUser(req as Request, res as Response, next);

      expect(userService.getUser).toHaveBeenCalledWith("1");

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockUser);
    });

    it("should handle errors and call next with the error", async () => {
      const mockError = new Error("Something went wrong");
      req.params = { userId: "1" };
      (userService.getUser as jest.Mock).mockRejectedValue(mockError);

      await getUser(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(mockError);
    });
  });
});
