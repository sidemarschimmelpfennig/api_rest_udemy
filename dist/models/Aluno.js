"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ser entre 3 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ser entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email inválido.',
          },
        },
        unique: {
          msg: 'Email ja existe.',
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro.',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero inteiro ou numero com ponto flutuante.',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero inteiro ou numero com ponto flutuante.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Image, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
