const express = require("express");
const cors = require("cors");
const app = express();
// exportation de la connexion à la base de donnée
require("./models/dbConfig");
//-----------

const postRoutes = require("./routes/postsController");
const articleRoutes = require("./routes/articlesController");
const adminRoutes = require("./routes/adminsController");
const bodyParser = require("body-parser");

const port = 4000;

app.use(express.json());
app.use(cors());

// ces middlewares (surveille req & res des routes)
app.use("/posts", postRoutes);
app.use("/articles", articleRoutes);
app.use("/admins", adminRoutes);

app.listen(port, () => {
  console.log(`Server connected on port: ${port}`);
});
