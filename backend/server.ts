import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const port = 3001;
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/users", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.send(allUsers);
});

app.get("/posts", async (req, res) => {
  const allPosts = await prisma.post.findMany();
  res.send(allPosts);
});

app.get("/likes", async (req, res) => {
  const allLikes = await prisma.like.findMany();
  res.send(allLikes);
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
