import jwt from 'jsonwebtoken';
import User from "../models/User.js";

export default async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = await User.findOne({_id: verified._id});
        next();
    } catch (e) {
        res.status(400).send('Error:', e);
    }
};