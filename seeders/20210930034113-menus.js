'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Menus', [
      {
        name: "pizza",
        category: "food",
        description: "lorem ipsum dolor sit amet",
        cost: 30000,
        image: "pizza.png",
      },
      {
        name: "milk",
        category: "drink",
        description: "lorem ipsum dolor sit amet",
        cost: 5000,
        image: "pizza.png",
      },
    ] , {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Menus' , null, {})
  }
};
