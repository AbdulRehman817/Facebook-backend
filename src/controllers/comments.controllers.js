// import commentsModels from "../models/comments.models.js";

// // Add a comment
// const addComments = async (req, res) => {
//   const { contentId, user, comment } = req.body;

//   // Validate inputs
//   if (!contentId) {
//     return res.status(400).json({
//       message: "content id is required",
//     });
//   }

//   if (!user) {
//     return res.status(400).json({
//       message: "user is required",
//     });
//   }

//   if (!comment) {
//     return res.status(400).json({
//       message: "comment is required",
//     });
//   }

//   try {
//     // Create a new comment
//     const newComment = await commentsModels.create({
//       contentId,
//       user,
//       comment, // Store the actual comment content
//     });

//     res.status(201).json({
//       message: "Comment added successfully",
//       newComment, // Return the newly created comment
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding comment", error });
//   }
// };

// // Get comments for a specific post
// const getCommentsForPost = async (req, res) => {
//   try {
//     const { postId } = req.params;

//     // Find comments related to the post
//     const comments = await commentsModels
//       .find({}) // Use `find` to get all comments for the post
//       .populate("user", "fullname email") // Populate user info
//       .populate("contentId", "title content"); // Optionally populate post info

//     res.status(200).json(comments);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching comments", error });
//   }
// };

// export {};
