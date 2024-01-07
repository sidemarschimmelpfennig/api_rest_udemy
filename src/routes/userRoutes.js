import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.store);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;

/*
index -> lista tudo -> GET
store/create -> criar -> POST
update -> atualiza -> PUT ou PATCH
delete -> deleta -> DELETE
show -> mostrar -> GET
*/
