import express from 'express';
import bcrypt from 'bcryptjs'
import User from "../models/User.js";
import {validateRegistration} from "../validation.js";

const router = express.Router();

// POST /register Register user with specified data
router.post('/register', async (req, res) => {
    // Validate the data before make a user
    const {error} = validateRegistration(req.body);
    // Send error is has one
    if (error) return res.status(400).send(error.details[0].message);

    // Check if email is unique
    const emailExists = await User.findOne({email: req.body.email});
    if (emailExists) return res.status(400).send('Email already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    // Save user
    try {
        const savedUser = await user.save();
        res.send({user: savedUser._id});
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;