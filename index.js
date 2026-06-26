const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch"); // para trocar o código pelo token

const app = express();
app.use(bodyParser.json());
app.use(cors());

// rota raiz
app.get("/", (req, res) => {
  res.send("Decap CMS OAuth Provider está rodando 🚀");
});

// variáveis de ambiente (configuradas no Vercel)
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// rota de autenticação → redireciona para GitHub
app.get("/auth", (req, res) => {
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo,user`;
  res.redirect(redirectUrl);
});

// rota de callback → troca o código pelo token
app.get("/callback", async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "Código não fornecido" });
  }

  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      }),
    });

    const data = await response.json();
    res.json(data); // retorna o access_token
  } catch (err) {
    res.status(500).json({ error: "Erro ao trocar código por token" });
  }
});

module.exports = app;
