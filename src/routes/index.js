import { Router } from 'express';

import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';
import tokenRoutes from './tokenRoutes';
import alunoRoutes from './alunoRoutes';
import imageRoutes from './imageRoutes';

const router = new Router();

router.use('/', homeRoutes);
router.use('/users/', userRoutes);
router.use('/tokens/', tokenRoutes);
router.use('/students/', alunoRoutes);
router.use('/images/', imageRoutes);

export default router;
