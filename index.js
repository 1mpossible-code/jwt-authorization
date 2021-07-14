import express from 'express';
import authRouter from "./routes/auth.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Create express app
const app = express();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Database connected'))
    .catch((err) => console.error(err));

// Middleware
app.use(express.json());
// Auth routes middleware
app.use('/api/user', authRouter);

// Serve server
app.listen(3000, () => {
    console.log('Server is running http://localhost:3000/')
})