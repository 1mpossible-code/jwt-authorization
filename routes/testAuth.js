import express from 'express';
import User from "../models/User.js";

const router = express.Router();

router.get('/', ((req, res) => {
    // Find user by _id
    const user = User.findOne({_id: req.user._id});
    // If user not exists send an error
    if (!user) return res.status(400).send('Invalid user id');
    // Send user
    res.json(user);
}))

export default router;
