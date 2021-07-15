import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {validateLogin, validateRegistration} from "../validation.js";

export const validateRegisterData = async (data) => {
    // Validate the data before make a user
    const {error} = validateRegistration(data);
    // Send error is has one
    if (error) return {message: error.details[0].message};

    // Check if email is unique
    const emailExists = await User.findOne({email: data.email});
    if (emailExists) return {message: 'Email already exists'};
}

export const validateLoginData = async (data) => {
    // Validate the data before make a user
    const {error} = validateLogin(data);
    // Send error is has one
    if (error) return {message: error.details[0].message};

    // Check if user exists
    const user = await User.findOne({email: data.email});
    if (!user) return {message: 'Email not found'};

    // Check if the password is valid
    const passwordIsValid = await bcrypt.compare(data.password, user.password);
    if (!passwordIsValid) return {message: 'Password is invalid'};
    // Return user
    return {user};
}

export const hashPassword = async (password) => {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const createNewUser = async ({name, email, password}) => {
    // Create new user
    const user = new User({
        name, email, password,
    });
    // Save user
    try {
        const savedUser = await user.save();
        return {status: 200, payload: {user: savedUser._id}}
    } catch (error) {
        return {status: 400, payload: error};
    }
}

export const createJwtToken = async (payload) => {
    // Create jwt token
    return jwt.sign(payload, process.env.TOKEN_SECRET);
}