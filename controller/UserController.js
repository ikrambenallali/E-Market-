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
module.exports = { createUser };