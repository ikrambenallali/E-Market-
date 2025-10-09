const Product = require('../models/Product');
// ==========================================gestion des produits=============================================

// creer un produit
async function createProduct(req, res) {
    const { title, description, price, stock, category, imageUrl } = req.body;
    try {
        const newProduct = await Product.create({ title, description, price, stock, category, imageUrl });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
}

// get all products
async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}
module.exports = { createProduct, getAllProducts };