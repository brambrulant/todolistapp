"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "cleaning",
          deadline: "next week",
          listId: 1,
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "codaisseur",
          deadline: "februari",
          listId: 2,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
