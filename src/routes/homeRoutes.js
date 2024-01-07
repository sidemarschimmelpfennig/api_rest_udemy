import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const router = Router();

router.get('/', HomeController.index);
router.post('/', HomeController.store);

export default router;
