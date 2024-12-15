import { Router } from "express";
import { renderHomePage } from "@/controllers/homePage";
import { renderPostPage } from "@/controllers/postPage";

const router = Router();

router.get("/", renderHomePage);
router.get("/post/:postId", renderPostPage);

export default router;
