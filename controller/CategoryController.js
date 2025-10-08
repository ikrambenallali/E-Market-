const Category = require('../models/Category');
// ==========================================gestion des categories=============================================
// creer une categorie
async function createCategory(req ,res){
    const {name , description} = req.body;
    try{
        const newCategory =await Category.create({name , description});
        res.status(201).json(newCategory);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ error: 'Failed to create category' });
    }
}

// get all categories
async function getAllCategories(req, res) {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
}

// supprimer une categorie
async function deleteCategory(req ,res){
    const {id} = req.params;
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ error: 'Failed to delete category' });
    }
}
module.exports = {createCategory, getAllCategories};