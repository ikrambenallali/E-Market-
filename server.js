require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');


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
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);


// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // console.log(`🚀 Serveur lancé sur le port ${PORT}`);
  console.log(`Server is running on http://localhost:${PORT}`);
});

