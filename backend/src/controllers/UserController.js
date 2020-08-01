import * as Yup from 'yup';
import User from '../models/User';

class UserController {
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

    async show(req, res) {
      try {
        const user = await User.findByPk(req.params.id);
        const { id, nome, email, password, admin } = user;

        return res.json({ id, nome, email, password, admin });
        } catch (err) {
          return res.status(400).json({ error: 'User not found' })
        }

  }

    async store(req, res) {
      try {
        const userExists = await User.findOne({ where: { email: req.body.email } });

        if (userExists) {
          return res.status(400).json({ error: 'User already exists' });
        }

        const newUser = await User.create(req.body);
        const { id, nome, email, admin } = newUser;



        return res.json( id, nome, email, admin );
        } catch (err) {
          return res.status(400).json({ error: 'Failed create new user' })
        }
    }

    async update(req, res) {
      try {
        const user = await User.findByPk(req.params.id);

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
        const user = await User.findByPk(req.params.id);
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

export default new UserController;
