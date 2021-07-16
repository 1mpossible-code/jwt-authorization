import {createJwtToken, validateLoginData} from "../services/authSerivce.js";

export const index = async (req, res) => {
    res.render('auth/login');
}

export const store = async (req, res) => {
    // Validate the data before login
    const {message, user} = await validateLoginData(req.body);
    // Send error is has one
    if (message) return res.status(400).send(message);

    // Create and assign jwt token
    const token = await createJwtToken({_id: user._id});
    res.header('Authorization', `Bearer ${token}`).redirect('/api/test');
}