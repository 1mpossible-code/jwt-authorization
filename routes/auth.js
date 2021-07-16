import express from 'express';
import * as RegisterController from "../controllers/registerController.js"
import * as LoginController from "../controllers/loginController.js"

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

export default router;