import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// Import routes
import authRoutes from "./routes/auth.js";
import testAuthRoutes from "./routes/testAuth.js";

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
// Route Middleware
app.use('/api/user', authRoutes);
app.use('/api/test', testAuthRoutes);

// Serve server
app.listen(3000, () => {
    console.log('Server is running http://localhost:3000/')
})