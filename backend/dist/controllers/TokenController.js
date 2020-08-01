"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {

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
    async store(req, res) {
        const { nome = "", password = "" } = req.body;

        if (!nome || !password) {
            return res.status(401).json({
                errors: ["Invalid credentials"]
            });
        }

        const user = await _User2.default.findOne({ where: { nome } });

        if (!user) {
            return res.status(401).json({
                errors: ["User not exist"]
            });
        }

        if (!(await user.passwordIsValid(password))) {
            return res.status(401).json({
                errors: ["Invalid Password"]
            });
        }
        const { id, admin } = user;
        const token = _jsonwebtoken2.default.sign({ id, nome, admin }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION,
        });

        return res.json({ token, id, nome, admin });
    }
}


exports. default = new TokenController();
