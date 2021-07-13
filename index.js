import express from 'express';
import authRouter from "./routes/auth.js";

const app = express();

app.use(authRouter);

app.listen(3000, () => {
    console.log('Server is running http://localhost:3000/')
})