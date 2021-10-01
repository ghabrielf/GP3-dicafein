'use strict';
const bcrypt = require('bcryptjs')

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
    await queryInterface.bulkInsert('Users' , [
      {
        name: "admin",
        email: "admin@email.com",
        password: bcrypt.hashSync("admin123"),
        role: "admin"
      },
      {
        name: "user",
        email: "user@email.com",
        password: bcrypt.hashSync("user123"),
        role: "member"
      },
      {
        name: "latif",
        email: "latif@email.com",
        password: bcrypt.hashSync("latif123"),
        role: "member"
      },
      {
        name: "fathya",
        email: "fathya@email.com",
        password: bcrypt.hashSync("fathya123"),
        role: "member"
      },
      {
        name: "ghabriel",
        email: "ghabriel@email.com",
        password: bcrypt.hashSync("ghabriel123"),
        role: "member"
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
    await queryInterface.bulkDelete('Users' , null , {})
  }
};
