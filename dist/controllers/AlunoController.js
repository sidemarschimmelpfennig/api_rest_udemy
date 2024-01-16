"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Image = require('../models/Image'); var _Image2 = _interopRequireDefault(_Image);

class AlunoController {
  async index(req, res) {
    const students = await _Aluno2.default.findAll({
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
        model: _Image2.default,
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
      const student = await _Aluno2.default.findByPk(id, {
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
          model: _Image2.default,
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
      const newStudent = await _Aluno2.default.create(req.body);

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
      const student = await _Aluno2.default.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      const updateStudent = _Aluno2.default.update(req.body);

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
      const student = await _Aluno2.default.findByPk(id);

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

exports. default = new AlunoController();
