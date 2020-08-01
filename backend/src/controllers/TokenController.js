import jwt from "jsonwebtoken";
import User from "../models/User";

class TokenController {

  async index(req, res) {
    try {
      const users = await User.findAll({
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

        const user = await User.findOne({ where: { nome } });

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
        const token = jwt.sign({ id, nome, admin }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION,
        });

        return res.json({ token, id, nome, admin });
    }
}


export default new TokenController();
