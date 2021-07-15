import {createNewUser, hashPassword, validateRegisterData} from "../services/authSerivce.js";

export const store = async (req, res) => {
    // Get error from validation
    const error = await validateRegisterData(req.body);
    // Send error
    if (error.message) return res.status(400).send(error.message);

    // Get hashed password
    const hashedPassword = await hashPassword(req.body.password);

    // Create new user
    const result = await createNewUser({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    // Send result of creating new user
    res.status(result.status).send(result.payload);
}