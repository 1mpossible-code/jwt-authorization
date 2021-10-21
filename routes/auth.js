import express from 'express';
import * as RegisterController from "../controllers/registerController.js"
import * as LoginController from "../controllers/loginController.js"
import * as AuthController from "../controllers/authController.js"
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

// GET /login Render register page
router.get('/register', RegisterController.index);
// POST /register Register user with specified data
router.post('/register', RegisterController.store);

// GET /login Render login page
router.get('/login', LoginController.index);
// POST /login Login user
router.post('/login', LoginController.store);
// GET /logout Logout user
router.get('/logout', LoginController.destroy);

// GET /auth/me
router.get('/auth/me', authMiddleware, AuthController.index)

export default router;
