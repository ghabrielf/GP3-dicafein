'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      user_id: {
        type: Sequelize.INTEGER(10)
      },
      table_id: {
        type: Sequelize.INTEGER(10)
      },
      status: {
        type: Sequelize.ENUM(["on site","waiting", "cancel", "done" ])
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
    await queryInterface.dropTable('bookings');
  }
};