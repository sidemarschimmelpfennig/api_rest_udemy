import { Router } from 'express';

import AlunoController from '../controllers/AlunoController';
import auth from '../middlewares/loginRequired';

const router = new Router();

router.get('/', AlunoController.index);
router.get('/:id', AlunoController.show);
router.post('/', auth, AlunoController.store);
router.put('/:id', auth, AlunoController.update);
router.delete('/:id', auth, AlunoController.delete);

export default router;
