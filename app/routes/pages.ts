import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home", { pageTitle: "Home", foo: "FOO" });
});

export default router;
