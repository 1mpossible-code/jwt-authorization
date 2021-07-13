import express from 'express';

const router = express.Router();

router.get('/ping', (req, res) => {
    console.log('Ping server');
    return res.send('Ping')
})

export default router;