const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    userId: {
      type: String,
      trim: true,
    },

    desc: {
      type: String,
      trim: true,
    },

    img: [
      {
        filename: { type: String },
        ulr: { type: String },
      },
    ],
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
