const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Sert tous les fichiers statiques (HTML, CSS, images…)
app.use(express.static(path.join(__dirname)));

// Si quelqu’un tape une adresse qui n’existe pas → renvoyer index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});