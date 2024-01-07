import User from '../models/User';

class UserController {
  // Create && Store
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json({ newUser });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          error: ['Id de usuário não em enviado.'],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          error: ['Usuário não existe.'],
        });
      }
      const updateUser = await user.update(req.body);
      return res.json(updateUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Read & Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  // Show && Read for Id
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          error: ['Usuário não existe.'],
        });
      }
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          error: ['Id de usuário não em enviado.'],
        });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          error: ['Usuário não existe.'],
        });
      }
      await user.destroy();
      return res.json({ success: 'Usuário deletado com sucesso.' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
