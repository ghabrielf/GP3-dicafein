'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      category: {
        type: Sequelize.ENUM(['food', 'drink']),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cost: {
        type: Sequelize.INTEGER(10),
        allowNull: false
      },
      image: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Menus');
  }
};