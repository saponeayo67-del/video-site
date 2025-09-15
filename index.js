const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// dire à Express de servir les fichiers statiques (HTML, CSS, images…)
app.use(express.static(path.join(__dirname)));

// route d'accueil
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// route abonnements
app.get("/abonnements.html", (req, res) => {
  res.sendFile(path.join(__dirname, "abonnements.html"));
});

// route créer vidéo
app.get("/creer-video.html", (req, res) => {
  res.sendFile(path.join(__dirname, "creer-video.html"));
});

// démarrer serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});