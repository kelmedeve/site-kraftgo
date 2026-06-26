const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// rota raiz
app.get("/", (req, res) => {
  res.send("Decap CMS OAuth Provider está rodando 🚀");
});

// rota de autenticação
app.get("/auth", (req, res) => {
  res.json({ message: "Auth endpoint funcionando!" });
});

// rota de callback
app.get("/callback", (req, res) => {
  res.json({ message: "Callback endpoint funcionando!" });
});

module.exports = app;
