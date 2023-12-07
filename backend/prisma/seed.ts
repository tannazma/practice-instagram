import { PrismaClient } from "@prisma/client";
import users from "./data/users.json";
import posts from "./data/posts.json";
import likes from "./data/likes.json";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < users.length; i += 1) {
    const userData = users[i];
    if (userData) {
      await prisma.user.create({
        data: userData,
      });
    }
  }

  for (let i = 0; i < posts.length; i += 1) {
    const postData = posts[i];
    if (postData) {
      await prisma.post.create({
        data: postData,
      });
    }
  }

  for (let i = 0; i < likes.length; i += 1) {
    const likeData = likes[i];
    if (likeData) {
      await prisma.like.create({
        data: likeData,
      });
    }
  }
};

seed();
