import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ser entre 3 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ser entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.INTEGER,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro.',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero inteiro ou numero com ponto flutuante.',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
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
}
