import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import {validateLogin} from "../validation.js";

export const store = async (req, res) => {
    // Validate the data before login
    const {error} = validateLogin(req.body);
    // Send error is has one
    if (error) return res.status(400).send(error.details[0].message);

    // Check if user exists
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Email not found');
    // Check if the password is valid
    const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
    if (!passwordIsValid) return res.status(400).send('Password is invalid');

    // Create and assign jwt token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('Authorization', `Bearer ${token}`).send(token);
}