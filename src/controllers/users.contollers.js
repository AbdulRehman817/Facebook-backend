// import usersModels from "../models/users.models.js"; // Correct relative path
// import postModels from "../models/post.models.js";
// const createUser = async (req, res) => {
//   const { fullname, email, userLikedPosts } = req.body;
//   if (!fullname) {
//     return res.status(401).json({
//       message: "fullname is required",
//     });
//   }
//   if (!email) {
//     return res.status(401).json({
//       message: "fullname is required",
//     });
//   }
//   const student = await usersModels.create({
//     fullname,
//     email,
//     userLikedPosts,
//   });
//   const like = usersModels.findByIdAndUpdate(userLikedPosts, {
//     $push: { likedBy: student.id },
//   });
//   res.status(200).json({
//     message: "student added",
//     student,
//   });
// };
// const getUsers = async (req, res) => {
//   const students = await usersModels.find({});
//   res.json(students);
// };

// export { createUser, getUsers };

import usersModels from "../models/users.models.js";
import postModels from "../models/post.models.js";

// Create a new user
const createUser = async (req, res) => {
  try {
    const { fullname, email, userLikedPosts } = req.body;

    // Validation
    if (!fullname || !email) {
      return res.status(400).json({
        success: false,
        message: "Fullname and Email are required fields",
      });
    }

    const userPost = await usersModels.create({
      fullname,
      email,
      userLikedPosts,
    });

    // Update likedBy in the referenced post
    if (userLikedPosts) {
      await postModels.findByIdAndUpdate(
        userLikedPosts,
        { $push: { likedBy: userPost._id } },
        { new: true }
      );
    }

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: userPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the user",
      error: error.message,
    });
  }
};

// Comment on a post
const commentUser = async (req, res) => {
  try {
    const { fullname, email, userCommentedPosts } = req.body;

    // Validation
    if (!fullname || !email) {
      return res.status(400).json({
        success: false,
        message: "Fullname and Email are required fields",
      });
    }

    const userComment = await usersModels.create({
      fullname,
      email,
      userCommentedPosts,
    });

    // Update CommentedBy in the referenced post
    if (userCommentedPosts) {
      await postModels.findByIdAndUpdate(
        userCommentedPosts,
        { $push: { CommentedBy: userComment._id } },
        { new: true }
      );
    }

    res.status(201).json({
      success: true,
      message: "User commented successfully",
      data: userComment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while commenting",
      error: error.message,
    });
  }
};

const bookmarkUser = async (req, res) => {
  try {
    const { fullname, email, userBookmarkPosts } = req.body;

    // Validation
    if (!fullname || !email) {
      return res.status(400).json({
        success: false,
        message: "Fullname and Email are required fields",
      });
    }

    // Create a new user with bookmark data
    const userBookmark = await usersModels.create({
      fullname,
      email,
      userBookmarkPosts,
    });

    // Update BookmarkedBy in the referenced post
    if (userBookmarkPosts) {
      await postModels.findByIdAndUpdate(
        userBookmarkPosts,
        { $push: { BookmarkBy: userBookmark._id } },
        { new: true }
      );
    }

    // Send a success response
    res.status(201).json({
      success: true,
      message: "User bookmarked successfully",
      data: userBookmark,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while bookmarking",
      error: error.message,
    });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await usersModels.find({});
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the users",
      error: error.message,
    });
  }
};

export { createUser, commentUser, getUsers, bookmarkUser };
