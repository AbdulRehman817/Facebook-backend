import postModels from "../models/post.models.js";

const createPost = async (req, res) => {
  const { post, author } = req.body;
  if (!post) {
    return res.status(401).json({
      message: "post is required",
    });
  }
  if (!author) {
    return res.status(401).json({
      message: "author is required",
    });
  }
  const Post = await postModels.create({
    post,
    author,
  });

  res.status(200).json({
    message: "student added",
    Post,
  });
};

const getPosts = async (req, res) => {
  const posts = await postModels
    .find({})
    .populate("likedBy")
    .populate("CommentedBy")
    .populate("BookmarkBy");
  res.json(posts);
};

export { createPost, getPosts };
