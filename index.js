const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Sert tous les fichiers statiques du projet (HTML, CSS, JS…)
app.use(express.static(__dirname));

// Page d'accueil explicite
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ⚠️ Supprimer le app.get("*", ...) qui redirige tout vers index.html

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});