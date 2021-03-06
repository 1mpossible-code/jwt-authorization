import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
// Import routes
import authRoutes from "./routes/auth.js";
import testAuthRoutes from "./routes/testAuth.js";

dotenv.config();

// Create express app
const app = express();

app.use(cors({
    origin: process.env.CORS_URL,
    credentials: true,
}))

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
// Parse cookie
app.use(cookieParser());
// Route Middleware
app.use('/', authRoutes);
app.use('/test', testAuthRoutes);
app.get('/', (req, res) => res.redirect('/test/routes'))

// View settings
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'eta')

// Serve server
app.listen(3000, () => {
    console.log('Server is running http://localhost:3000/')
})