import { Router } from "express";
import * as usersController from "@/controllers/api/user";

const router = Router();

router.get("/", usersController.listUsers);
router.get("/:userId", usersController.getUser);

export default router;
