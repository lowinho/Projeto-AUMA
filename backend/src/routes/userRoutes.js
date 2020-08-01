import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import UserController from '../controllers/UserController';
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get('/', UserController.index);


router.get('/:id', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
}).unknown()
}), UserController.show);


router.post('/', celebrate({
  // [Segments.HEADERS]: Joi.object({
  //   authorization: Joi.string().required(),
// }).unknown(),
  [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required().min(3).max(15),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6).max(12),
      admin: Joi.boolean(),
  })
}), UserController.store);


router.put('/:id', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
}).unknown(),
  [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required().min(3).max(15),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6).max(12),
      admin: Joi.boolean(),
  })
}), UserController.update); // resolver sobre loginRequired


router.delete('/:id', loginRequired, UserController.delete);

export default router;
