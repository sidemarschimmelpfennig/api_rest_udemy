import { Router } from 'express';

import UserController from '../controllers/UserController';
import auth from '../middlewares/loginRequired';

const router = new Router();

// Nao deveria existir =====
// router.get('/', UserController.index);
// router.get('/:id', UserController.show);
// =========================
router.post('/', UserController.store);
router.put('/', auth, UserController.update);
router.delete('/', auth, UserController.delete);

export default router;

/*
index -> lista tudo -> GET
store/create -> criar -> POST
update -> atualiza -> PUT ou PATCH
delete -> deleta -> DELETE
show -> mostrar -> GET
*/
