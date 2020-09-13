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
        text: "This is a sample thought!",
        dateTime: new Date(),
        messageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Prisoner of Azkaban!",
        dateTime: new Date(),
        messageId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Definitely Goblet of Fire!",
        dateTime: new Date(),
        messageId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Another sample thought!",
        dateTime: new Date(),
        messageId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Thoughts", null, {});
  },
};
