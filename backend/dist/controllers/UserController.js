"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async index(req, res) {

    try {
      const users = await _User2.default.findAll({
        attributes: ["id", "nome", "email", "admin"],
      });

        return res.json(users);
    }
  catch (err) {
    return res.status(400).json({ error: 'Validation fails' })
  }
}

    async show(req, res) {
      try {
        const user = await _User2.default.findByPk(req.params.id);
        const { id, nome, email, password, admin } = user;

        return res.json({ id, nome, email, password, admin });
        } catch (err) {
          return res.status(400).json({ error: 'User not found' })
        }

  }

    async store(req, res) {
      try {
        const userExists = await _User2.default.findOne({ where: { email: req.body.email } });

        if (userExists) {
          return res.status(400).json({ error: 'User already exists' });
        }

        const newUser = await _User2.default.create(req.body);
        const { id, nome, email, admin } = newUser;



        return res.json( id, nome, email, admin );
        } catch (err) {
          return res.status(400).json({ error: 'Failed create new user' })
        }
    }

    async update(req, res) {
      try {
        const user = await _User2.default.findByPk(req.params.id);

        if (!user) {
          return res.status(400).json({
            errors: 'User not found'
          });
        }

        const userUpdate = await user.update(req.body);

        const { id, nome, email, admin } = userUpdate;
        return res.json({ id, nome, email, admin });
        } catch (err) {
          return res.status(400).json({ error: 'User can´t be updated' })
        }
    }

    async delete(req, res) {
      try {
        const user = await _User2.default.findByPk(req.params.id);
        if (!user) {
          return res.status(400).json({
            errors: 'User not found'
          });
        }

        await user.destroy(req.body);

        return res.json({ msg: 'User deleted' });
        } catch (err) {
          return res.status(400).json({ error: 'User can´t deleted' })
        }
    }
}

exports. default = new UserController;
