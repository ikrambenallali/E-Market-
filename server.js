const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('Hello Express 👋');
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
