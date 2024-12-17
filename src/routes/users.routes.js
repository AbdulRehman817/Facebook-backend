import express from "express";
import {
  createUser,
  getUsers,
  commentUser,
  bookmarkUser,
} from "../controllers/users.contollers.js";

const router = express.Router();

// Create a new student
router.post("/userpost", createUser);
router.get("/users", getUsers);
router.post("/usercomment", commentUser);
router.post("/userbookmark", bookmarkUser);

export default router;
