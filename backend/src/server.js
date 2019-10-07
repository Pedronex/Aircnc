const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const socketio = require("socket.io");
const http = require("http");

const routes = require("./routes");

const app = express();
// Permitir a aplicação entender protocolos socket io
const server = http.Server(app);
// Passar ou enviar mensagem para a aplicação
const io = socketio(server);

const connectedUsers = {};
// Conexão com o banco de dados do MongoDB
mongoose.connect(
  "mongodb+srv://nexs:20181012000215@omnistack9-xxwl2.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Coletar o id do usuario e encontrar a seção em que esta
io.on('connection', socket => {
  const { user_id } = socket.handshake.query

  connectedUsers[user_id] = socket.id;
});
// A função next funciona para a aplicação 
// continuar em andamento após a execução do comando
app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

// Possibilitar requisições de outros lugares
app.use(cors());
// Entender requisições do tipo JSON
app.use(express.json());
// Apresentar as imagens, o static retorna aquivos estaticos como PDF, Imagens,etc
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
// Ultilizar rotas
app.use(routes);

server.listen(3333);
