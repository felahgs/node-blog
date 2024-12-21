import { Router } from "express";
import * as postController from "@/controllers/api/post";

const router = Router();

router.get("/", postController.listPosts);
router.get("/:postId", postController.getPost);

export default router;
