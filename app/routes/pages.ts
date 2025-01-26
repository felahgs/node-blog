import { Router } from "express";
import { renderUserPage, renderHomePage, renderPostPage } from "@/controllers";

const router = Router();

router.get("/", renderHomePage);
router.get("/post/:postId", renderPostPage);
router.get("/user/:userId", renderUserPage);

export default router;
