import { Router } from 'express';

import tokenController from '../controllers/TokenController';
const router = new Router();

router.get('/', tokenController.index);
router.post('/', tokenController.store);


export default router;
