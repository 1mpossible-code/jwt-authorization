import express from 'express';
import User from "../models/User.js";
import {validateRegistration} from "../validation.js";

const router = express.Router();

// POST /register Register user with specified data
router.post('/register', async (req, res) => {
    // Validate the data before make a user
    const {error} = validateRegistration(req.body);
    // Send error is has one
    if (error) return res.status(400).send(error.details[0].message);

    // Create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    // Save user
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;