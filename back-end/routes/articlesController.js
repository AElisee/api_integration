const express = require("express");
const router = express.Router();

const { ArticleModel } = require("../models/articlesModel");

router.get("/", (req, res) => {
  ArticleModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error to get data " + err);
  });
});

router.post("/", (req, res) => {
  const newRecord = new ArticleModel({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error creating data " + err);
  });
});

module.exports = router;
