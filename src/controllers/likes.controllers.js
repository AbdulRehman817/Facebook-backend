// import likesModels from "../models/likes.models.js";
// const likePost = async (req, res) => {
//   const { postId, user } = req.body;
//   if (!postId) {
//     return res.status(400).json({
//       message: "content id is required",
//     });
//   }
//   if (!user) {
//     return res.status(400).json({
//       message: "user is required",
//     });
//   }
//   const existingLike = await likesModels.findOne({ user, postId });
//   if (existingLike) {
//     return res.status(400).json({ message: "You already liked this post" });
//   } else {
//     const newLike = await likesModels.create({
//       postId,
//       user,
//     });
//     const like = await likesModels.findByIdAndUpdate(userwholiked, {
//       $push: { postId: newLike._id },
//     });

//     res
//       .status(201)
//       .json(
//         { message: "Post liked successfully", likePost }
//           .populate("user", "fullname email")
//           .populate("title content")
//       );
//   }
// };
// const getLike = async (req, res) => {
//   const course = await likesModels
//     .find({})
//     .populate("user", "fullname email") // Populate user info
//     .populate("postId"); //
//   res.json(course);
// };
// const getUserLikedPosts = async (req, res) => {
//   try {
//     const { id } = req.params; // Extract the userId from the route params

//     // Find all likes for the specified user and populate the post details
//     const likedPosts = await likesModels
//       .find({ user: id }) // Filter by user
//       .populate("enrolledUsers"); // Populate specific post fields
//     console.log(likedPosts);
//     // Respond with the list of liked posts
//     res.status(200).json(likedPosts);
//   } catch (error) {
//     console.error("Error fetching liked posts:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching liked posts." });
//   }
// };
// export { likePost, getLike, getUserLikedPosts };
