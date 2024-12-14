import express from "express";
import postsRoutes from "@/routes/posts";
import usersRoute from "@/routes/users";
import { errorHandler } from "./app/middlewares";

const app = express();
const port = 3030;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Health Check Ok!");
});

app.use("/posts", postsRoutes);
app.use("/users", usersRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
