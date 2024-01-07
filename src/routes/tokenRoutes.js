import { Router } from 'express';
import TokenController from '../controllers/TokenController';

const router = new Router();

router.get('/', TokenController.store);
router.post('/', TokenController.store);

export default router;
