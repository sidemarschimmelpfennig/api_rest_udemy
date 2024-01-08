import { Router } from 'express';
import HomeController from '../controllers/HomeController';
import auth from '../middlewares/loginRequired';

const router = Router();

router.get('/', auth, HomeController.index);
router.post('/', HomeController.store);

export default router;
