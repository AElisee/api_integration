const mongoose = require("mongoose");

mongoose.models = {};

const AdminsModel = mongoose.model(
  "lab1",
  {
    username: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    updated: {
      type: Date,
      default: Date.now,
    },
  },
  "admins"
);

module.exports = { AdminsModel };
