const express = require("express");
const mongoose = require("mongoose");
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

// Entender requisições do tipo JSON
app.use(express.json());
// Ultilizar rotas
app.use(routes);

app.listen(3333);
