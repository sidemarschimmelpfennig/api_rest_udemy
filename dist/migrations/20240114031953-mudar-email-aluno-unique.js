"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
    );
  },

  down: () => {},
};
