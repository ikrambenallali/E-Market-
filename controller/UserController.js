const User = require('../models/User');
const bcrypt = require("bcryptjs");

async function createUser(req, res) {
    const { fullname, email, password, role } = req.body;
    if (!fullname || !email || !password) {
        return res.status(400).json({ error: 'le nom et email et password sont obligatoire ' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "Cet email est déjà utilisé" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;
        const user = await User.create({ fullname, email, password: hashedPassword, role });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}
async function deleteUser(req, res) {
    const { id } = req.params;
   try {
         const user = await User.findByIdAndDelete(id);
         if (!user) {
             return res.status(404).json({ error: 'User not found' });
         }
         res.status(200).json({ message: 'User deleted successfully' });
   } catch (error) {
       console.error('Error deleting user:', error);
       res.status(500).json({ error: 'Failed to delete user' });
   }
}
module.exports = { createUser, getAllUsers, deleteUser };