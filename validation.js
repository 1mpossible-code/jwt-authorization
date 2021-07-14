import Joi from 'joi';

// Register validation schema
export const registerValidationSchema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().max(255).required().email(),
    password: Joi.string().max(1024).required(),
});
