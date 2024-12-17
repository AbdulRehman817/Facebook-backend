import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email uniqueness
    },
    userLikedPosts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
    userCommentedPosts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
    userBookmarkPosts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt`
  }
);

export default mongoose.model("Users", userSchema);
