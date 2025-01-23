import express from "express";
import path from "path";

import apiRoutes from "@/routes/api";
import pagesRoutes from "@/routes/pages";

import prisma from "./prisma/prismaClient";

import { errorHandler, keycloak } from "./app/middlewares";

const app = express();
const port = 3030;

async function main() {
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "public")));
  app.set("views", path.join(__dirname, "/app/views"));
  app.set("view engine", "ejs");

  app.get("/health", (req, res) => {
    res.send("Health Check Ok!");
  });

  app.use("/api", apiRoutes);
  app.use("/", pagesRoutes);

  app.use("", (req, res) => {
    res.status(404).render("not-found", { path: "", pageTitle: "Not found" });
  });

  app.use(errorHandler);
  app.use(keycloak.middleware());

  app.listen(port, () => {
    console.log(`Running server on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
