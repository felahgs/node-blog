import { Router } from "express";

import postsRoutes from "@/routes/api/posts";
import usersRoute from "@/routes/api/users";

const router = Router();

router.use("/posts", postsRoutes);
router.use("/users", usersRoute);

export default router;
