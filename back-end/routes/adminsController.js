const express = require("express");
const router = express.Router();

const { AdminsModel } = require("../models/adminsModel");

router.get("/", (req, res) => {
  AdminsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error to get data" + err);
  });
});

router.get("/:id", (req, res) => {
  AdminsModel.findOne((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error to get data" + err);
  });
});

router.post("/", (req, res) => {
  const newRecord = new AdminsModel({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error to post data" + err);
  });
});

router.put("/:id", (req, res) => {
  AdminsModel.findByIdAndUpdate(
    req.params.id,
    {
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("error to update" + err);
    }
  );
});

router.delete("/:id", (req, res) => {
  AdminsModel.findByIdAndDelete(req.params.id, (err, docs) => {
    if (!err) res.send(`deleting successful ${docs}`);
    else console.log("error to get data" + err);
  });
});

module.exports = router;
