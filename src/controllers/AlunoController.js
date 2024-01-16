import Aluno from '../models/Aluno';
import Image from '../models/Image';

class AlunoController {
  async index(req, res) {
    const students = await Aluno.findAll({
      attributes: [
        'id',
        'nome',
        'sobrenome',
        'idade',
        'peso',
        'altura',
      ],
      order: [['id', 'DESC']],
      include: {
        model: Image,
        attributes: ['url', 'filename'],
      },
    });
    res.json(students);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando Id.'],
        });
      }
      const student = await Aluno.findByPk(id, {
        attributes: [
          'id',
          'nome',
          'sobrenome',
          'idade',
          'peso',
          'altura',
        ],
        order: [['id', 'DESC']],
        include: {
          model: Image,
          attributes: ['url', 'filename'],
        },
      });

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const newStudent = await Aluno.create(req.body);

      return res.json(newStudent);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando Id.'],
        });
      }
      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      const updateStudent = Aluno.update(req.body);

      return res.json(updateStudent);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando Id.'],
        });
      }
      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await student.destroy();
      return res.json({ success: 'Aluno excluido com sucesso' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
