import { Router } from 'express';
import ImageController from '../controllers/ImageController';
// import auth from '../middlewares/loginRequired';

const router = Router();

router.post('/', ImageController.store);

export default router;
