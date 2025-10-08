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
module.exports = {createCategory};