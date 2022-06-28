const mongoose = require("mongoose");
mongoose.models = {};
const PostsModel = mongoose.model(
  "lab1",
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "posts"
);

module.exports = { PostsModel };
