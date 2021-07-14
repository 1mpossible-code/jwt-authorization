import Joi from 'joi';

// Register validation schema
export const validateRegistration = data => {
    // Create schema
    const schema = Joi.object({
        name: Joi.string().min(6).max(255).required(),
        email: Joi.string().max(255).required().email(),
        password: Joi.string().min(8).max(1024).required(),
    });
    // Return the result of validation
    return schema.validate(data);
}

// Login validation schema
export const validateLogin = data => {
    // Create schema
    const schema = Joi.object({
        email: Joi.string().max(255).required().email(),
        password: Joi.string().max(1024).required(),
    });
    // Return the result of validation
    return schema.validate(data);
}
