import express from "express";
import apiRoutes from "@/routes/api";

import { errorHandler } from "./app/middlewares";

const app = express();
const port = 3030;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Health Check Ok!");
});

app.use("/api", apiRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
