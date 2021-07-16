import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
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

// Parse x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// Parse json
app.use(bodyParser.json());
// Route Middleware
app.use('/api/user', authRoutes);
app.use('/api/test', testAuthRoutes);

// View settings
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'eta')

// Serve server
app.listen(3000, () => {
    console.log('Server is running http://localhost:3000/')
})