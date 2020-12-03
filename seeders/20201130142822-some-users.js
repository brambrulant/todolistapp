"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Bram",
          email: "bram@bram.nl",
          phone: "0541661150",
          password: "string1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fieke",
          email: "fieke@fieke.nl",
          phone: "061234567",
          password: "gracht1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
