"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _celebrate = require('celebrate');

var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _UserController2.default.index);


router.get('/:id', _celebrate.celebrate.call(void 0, {
  [_celebrate.Segments.HEADERS]: _celebrate.Joi.object({
    authorization: _celebrate.Joi.string().required(),
}).unknown()
}), _UserController2.default.show);


router.post('/', _celebrate.celebrate.call(void 0, {
  // [Segments.HEADERS]: Joi.object({
  //   authorization: Joi.string().required(),
// }).unknown(),
  [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
      nome: _celebrate.Joi.string().required().min(3).max(15),
      email: _celebrate.Joi.string().required().email(),
      password: _celebrate.Joi.string().required().min(6).max(12),
      admin: _celebrate.Joi.boolean(),
  })
}), _UserController2.default.store);


router.put('/:id', _celebrate.celebrate.call(void 0, {
  [_celebrate.Segments.HEADERS]: _celebrate.Joi.object({
    authorization: _celebrate.Joi.string().required(),
}).unknown(),
  [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
      nome: _celebrate.Joi.string().required().min(3).max(15),
      email: _celebrate.Joi.string().required().email(),
      password: _celebrate.Joi.string().required().min(6).max(12),
      admin: _celebrate.Joi.boolean(),
  })
}), _UserController2.default.update); // resolver sobre loginRequired


router.delete('/:id', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;
