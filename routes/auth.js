import express from 'express';
import User from "../models/User.js";

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log(req.body)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;