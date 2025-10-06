require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connexion réussie à MongoDB'))
  .catch((err) => console.error('❌ Erreur de connexion à MongoDB :', err));

// Route test
app.get('/', (req, res) => {
  res.send('Hello MongoDB + Express 👋');
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
const User = require('./models/User');

// Route pour créer un utilisateur
app.post('/users', async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body;

    // Vérification simple
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: 'fullname, email et password sont requis' });
    }

    // Création de l'utilisateur
    const newUser = new User({ fullname, email, password, role });
    await newUser.save();

    res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});
