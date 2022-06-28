// connxion à la db | installation de mongoose (npm i -s mongoose) & l'importer dans index.js
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/lab1",
  // { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("mongoDB connected !");
    else console.log("connection error" + err);
  }
);
