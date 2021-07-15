import jwt from 'jsonwebtoken';

export default (req, res) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        req.user = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (e) {
        res.status(400).send('Invalid Token');
    }
};