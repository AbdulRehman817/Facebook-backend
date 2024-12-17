import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    post: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },

    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    CommentedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    BookmarkBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt`
  }
);

export default mongoose.model("Posts", postSchema);
