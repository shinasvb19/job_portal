const Post = require("../models/post");

const posts = async (req, res) => {
  console.log(req.body);
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
exports.posts = posts;
