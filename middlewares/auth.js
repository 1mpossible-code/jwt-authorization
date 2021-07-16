import jwt from 'jsonwebtoken';
import User from "../models/User.js";

export default async (req, res, next) => {
    const authorization = req.header('Authorization');
    if (!authorization) return res.status(401).send('Access Denied');
    const token = authorization.replace('Bearer ', '');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = await User.findOne({_id: verified._id});
        next();
    } catch (e) {
        res.status(400).send('Error:', e);
    }
};