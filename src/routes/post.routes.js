import express from "express";
import { createPost, getPosts } from "../controllers/post.controllers.js";

const router = express.Router();

router.post("/post", createPost);
router.get("/posts", getPosts);

export default router;
