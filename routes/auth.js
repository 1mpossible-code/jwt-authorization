import express from 'express';
import * as RegisterController from "../controllers/registerController.js"
import * as LoginController from "../controllers/loginController.js"

const router = express.Router();

// POST /register Register user with specified data
router.post('/register', RegisterController.store);

// POST /login Login user
router.post('/login', LoginController.store);

export default router;