// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Route test
app.get("/", (req, res) => {
  res.send("✅ Ton backend marche !");
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
