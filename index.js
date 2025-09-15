const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// dire à Express où trouver les fichiers statiques (HTML, CSS…)
app.use(express.static(path.join(__dirname)));

// route principale → affiche index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});