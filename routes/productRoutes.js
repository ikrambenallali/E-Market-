const express = require('express');
const {createProduct,getAllProducts,deleteProduct,restoreProduct,getProductById,updateProduct ,searchProducts} = require('../controller/ProductController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - title
 *         - price
 *         - stock
 *       properties:
 *         id:
 *           type: string
 *           description: ID auto-généré du produit
 *         title:
 *           type: string
 *           description: Nom du produit
 *         description:
 *           type: string
 *           description: Description du produit
 *         price:
 *           type: number
 *           description: Prix du produit
 *         stock:
 *           type: number
 *           description: Quantité en stock
 *         category:
 *           type: string
 *           description: Catégorie du produit
 *         imageUrl:
 *           type: string
 *           description: URL de l'image du produit
 *         isDeleted:
 *           type: boolean
 *           default: false
 *           description: Indique si le produit est supprimé (soft delete)
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API de gestion des produits
 */

/**
 * @swagger
 * /products/createProduct:
 *   post:
 *     summary: Créer un nouveau produit
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Produit créé avec succès
 *       400:
 *         description: Données manquantes ou invalides
 *       500:
 *         description: Erreur serveur lors de la création
 */
router.post('/createProduct', createProduct);

/**
 * @swagger
 * /products/getAllProducts:
 *   get:
 *     summary: Récupérer tous les produits (non supprimés)
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Liste des produits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Erreur serveur lors de la récupération
 */
router.get('/getAllProducts', getAllProducts);

/**
 * @swagger
 * /products/getProductById/{id}:
 *   get:
 *     summary: Récupérer un produit par ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID du produit
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produit trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Produit non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/getProductById/:id', getProductById);

/**
 * @swagger
 * /products/updateProduct/{id}:
 *   put:
 *     summary: Mettre à jour un produit
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID du produit à mettre à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Produit mis à jour avec succès
 *       404:
 *         description: Produit non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/updateProduct/:id', updateProduct);

/**
 * @swagger
 * /products/deleteProduct/{id}:
 *   delete:
 *     summary: Supprimer (soft delete) un produit
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID du produit à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produit supprimé avec succès
 *       500:
 *         description: Erreur serveur lors de la suppression
 */
router.delete('/deleteProduct/:id', deleteProduct);

/**
 * @swagger
 * /products/restoreProduct:
 *   get:
 *     summary: Récupérer la liste des produits supprimés (pour restauration)
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Liste des produits supprimés
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Erreur serveur lors de la récupération
 */
router.get('/restoreProduct', restoreProduct);
router.get('/search', searchProducts);


module.exports = router;
