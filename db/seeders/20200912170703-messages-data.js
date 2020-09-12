"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Messages", [
      {
        text: "Hi! Welcome to the conversation!",
        dateTime: new Date(),
        conversationId: 1,
      },
      {
        text: "Hello",
        dateTime: new Date(),
        conversationId: 1,
      },
      {
        text: "Good morning!",
        dateTime: new Date(),
        conversationId: 2,
      },
      {
        text: "How's everyone's day going?",
        dateTime: new Date(),
        conversationId: 2,
      },
      {
        text: "Demo Conversation 3",
        dateTime: new Date(),
        conversationId: 3,
      },
      {
        text: "Demo Conversation 4",
        dateTime: new Date(),
        conversationId: 4,
      },
      {
        text: "Demo Conversation 5",
        dateTime: new Date(),
        conversationId: 4,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Messages", null, {});
  },
};
