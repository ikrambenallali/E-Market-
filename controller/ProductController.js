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
        const products = await Product.find({ isDeleted: false });
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}

// supprimer un produit
async function deleteProduct(req ,res){
    const {id} = req.params;
    try {
        const deleteProduct = await Product.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        res.status(200).json(deleteProduct);
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    } 
}

// restaurrer un produit
async function restoreProduct(req, res) {
     try {
        const products = await Product.find({ isDeleted: true });
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}

//get products by id 
async function getProductById(req, res) {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product || product.isDeleted) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
}

// update product
async function updateProduct(req, res) {
    const { id } = req.params;
    const { title, description, price, stock, category, imageUrl } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { title, description, price, stock, category, imageUrl }, { new: true });
        if (!updatedProduct || updatedProduct.isDeleted) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
}

module.exports = { createProduct, getAllProducts, deleteProduct , restoreProduct, getProductById, updateProduct };