import { Router } from "express";
import { renderHomePage } from "@/controllers/homePage";
import { renderPostPage } from "@/controllers/postPage";
import { renderUserPage } from "@/controllers/userPage";

const router = Router();

router.get("/", renderHomePage);
router.get("/post/:postId", renderPostPage);
router.get("/user/:userId", renderUserPage);

export default router;
