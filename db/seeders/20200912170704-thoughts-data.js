"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Thoughts", [
      {
        text: "Going great!",
        dateTime: new Date(),
        messageId: 4,
      },
      {
        text: "Awesome",
        dateTime: new Date(),
        messageId: 4,
      },
      {
        text: "Could be better",
        dateTime: new Date(),
        messageId: 4,
      },
      {
        text: "Sample",
        dateTime: new Date(),
        messageId: 1,
      },
      {
        text: "Demo thought 3",
        dateTime: new Date(),
        messageId: 3,
      },
      {
        text: "Demo thought 4",
        dateTime: new Date(),
        messageId: 2,
      },
      {
        text: "Demo message 5",
        dateTime: new Date(),
        messageId: 1,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Thoughts", null, {});
  },
};
