const Post = require("../models/post");
const User = require("../models/user");
const posts = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const newPost = new Post({
    url: req.body.url,
    desc: req.body.desc,
    userId: req.params.id,
  });

  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
exports.posts = posts;

const getPosts = async (req, res) => {
  try {
    const posts = await Post.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "details",
        },
      },
    ]);
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    req.status(500).json(err);
    console.log(err);
  }
};
exports.getPosts = getPosts;

exports.allPosts = async (req, res) => {
  try {
    const skip = req.query.skip ? Number(req.query.skip) : 0;
    const DEFAULT_LIMIT = 10;

    const data = await postData.res.json({ data });
  } catch (err) {
    console.log(err);
  }
};
