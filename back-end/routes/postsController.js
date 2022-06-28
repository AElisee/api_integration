const express = require("express");
const router = express.Router();

// Utilisé pour le put, va récuperer l'id de l'objet
const ObjectId = require("mongoose").Types.ObjectId;

const { PostsModel } = require("../models/postsModel");

router.get("/", (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error to get data " + err);
  });
});

router.post("/", (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error creating data " + err);
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params))
    return res.status(400).send("id unknow :" + req.params.id);

  const updateRecord = {
    author: req.body.author,
    message: req.body.message,
  };

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error :" + err);
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params))
    return res.status(400).send("id unknow :" + req.params.id);

  PostsModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.status(200).send(docs);
    else console.log("Delete error : " + err);
  });
});

module.exports = router;

// pour faire un post nous avons besoin du middleware body-parser pour lire du json (on l'installe en faisant npm i -s body-parser puis on l'import au plus de notre fichier (c-a-d dans index.js))
