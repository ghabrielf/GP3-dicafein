'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.renameColumn('Tables' , 'table_number' , 'chalk_board')
    await queryInterface.renameTable('Tables', 'cafe_tables')
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameTable('cafe_tables' , 'Tables')
    await queryInterface.renameColumn('Tables' , 'chalk_board' , 'table_number')
  }
};
