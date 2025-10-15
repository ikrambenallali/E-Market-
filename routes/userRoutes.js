const express = require('express');
const { createUser, getAllUsers, deleteUser, getUserById } = require('../controller/UserController');
const validationMiddleware = require("../middlewares/validation");
const { userSchema } = require("../middlewares/schema");
const logger = require('../middlewares/logger');
const errorHandler = require('../middlewares/errorHandler');
const notFound = require('../middlewares/notFound');

const validator = new validationMiddleware();
const router = express.Router();
router.use(logger);
router.use(errorHandler);
router.use(notFound);
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - fullname
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: ID auto-généré de l'utilisateur
 *         fullname:
 *           type: string
 *           description: Nom complet de l'utilisateur
 *         email:
 *           type: string
 *           format: email
 *           description: Adresse e-mail de l'utilisateur
 *         password:
 *           type: string
 *           format: password
 *           description: Mot de passe de l'utilisateur
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           description: Rôle de l'utilisateur
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API de gestion des utilisateurs
 */

/**
 * @swagger
 * /users/createUser:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Données manquantes
 *       409:
 *         description: Email déjà utilisé
 */
router.post('/createUser', validator.validate(userSchema), createUser);

/**
 * @swagger
 * /users/getAllUsers:
 *   get:
 *     summary: Récupérer tous les utilisateurs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Liste de tous les utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/getAllUsers', getAllUsers);

/**
 * @swagger
 * /users/getUserById/{id}:
 *   get:
 *     summary: Récupérer un utilisateur par ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de l'utilisateur à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Utilisateur non trouvé
 */
router.get('/getUserById/:id', getUserById);

/**
 * @swagger
 * /users/deleteUser/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur par ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de l'utilisateur à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       404:
 *         description: Utilisateur non trouvé
 */
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;
