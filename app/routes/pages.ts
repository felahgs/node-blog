import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home", { foo: "FOO" });
});

export default router;
