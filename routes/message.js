import express from 'express';
import { getAll, addMessage } from '../controllers/message.js';

const router = express.Router();
router.get('/message', getAll);
router.post('/message', addMessage);

export default router;
