"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Conversations", [
      {
        title: "Demo Conversation 1",
        startDate: new Date().toDateString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Demo Conversation 2",
        startDate: new Date().toDateString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Demo Conversation 3",
        startDate: new Date().toDateString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Demo Conversation 4",
        startDate: new Date().toDateString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Conversations", null, {});
  },
};
