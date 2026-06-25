const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
app.use(bodyParser.json());

app.get("/auth", (req, res) => {
  res.send("OAuth Provider Auth Endpoint funcionando!");
});

app.get("/callback", (req, res) => {
  res.send("OAuth Provider Callback Endpoint funcionando!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Provider rodando na porta ${port}`));
