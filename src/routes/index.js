import express from 'express';
import loginRouter from './checkin';

const router = express.Router();

router.use('/checkin', loginRouter);

export default router;
