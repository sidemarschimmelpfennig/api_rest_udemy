import { Router } from 'express';
import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';
import tokenRoutes from './tokenRoutes';

const router = new Router();

router.use('/', homeRoutes);
router.use('/users/', userRoutes);
router.use('/tokens/', tokenRoutes);

export default router;
