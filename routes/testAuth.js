import express from 'express';
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
    // Get user
    const user = req.user;
    // Send user
    res.render('template', {
        title: 'User Credits',
        payload: {
            _id: user._id,
            name: user.name,
            email: user.email,
            date: user.date,
        },
    });
});

export default router;
