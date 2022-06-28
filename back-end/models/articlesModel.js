const mongoose = require("mongoose");
mongoose.models = {};
const ArticleModel = mongoose.model(
  "lab1",
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "articles"
);

module.exports = { ArticleModel };
