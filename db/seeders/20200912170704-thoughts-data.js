"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Thoughts", [
      {
        text: "Going great!",
        dateTime: new Date(),
        messageId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Awesome",
        dateTime: new Date(),
        messageId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Could be better",
        dateTime: new Date(),
        messageId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Sample",
        dateTime: new Date(),
        messageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Demo thought 3",
        dateTime: new Date(),
        messageId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Demo thought 4",
        dateTime: new Date(),
        messageId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Demo message 5",
        dateTime: new Date(),
        messageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Thoughts", null, {});
  },
};
