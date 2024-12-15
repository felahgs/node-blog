import express from "express";
import apiRoutes from "@/routes/api";
import path from "path";
import pagesRoutes from "@/routes/pages";

import { errorHandler } from "./app/middlewares";

const app = express();
const port = 3030;

app.use(express.json());
app.set("views", path.join(__dirname, "/app/views"));
app.set("view engine", "ejs");

app.get("/health", (req, res) => {
  res.send("Health Check Ok!");
});

app.use("/api", apiRoutes);
app.use("/", pagesRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
