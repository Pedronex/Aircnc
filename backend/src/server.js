const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const app = express();

// Conexão com o banco de dados do MongoDB
mongoose.connect(
  "mongodb+srv://nexs:20181012000215@omnistack9-xxwl2.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Possibilitar requisições de outros lugares
app.use(cors());
// Entender requisições do tipo JSON
app.use(express.json());
// Apresentar as imagens, o static retorna aquivos estaticos como PDF, Imagens,etc
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
// Ultilizar rotas
app.use(routes);

app.listen(3333);
