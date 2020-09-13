"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Messages", [
      {
        text: "Hi! Welcome to the conversation!",
        dateTime: new Date(),
        conversationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Hello",
        dateTime: new Date(),
        conversationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Good morning!",
        dateTime: new Date(),
        conversationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "How's everyone's day going?",
        dateTime: new Date(),
        conversationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "What's your favorite Harry Potter book?",
        dateTime: new Date(),
        conversationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Great question!",
        dateTime: new Date(),
        conversationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "What's your favorite number?",
        dateTime: new Date(),
        conversationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Messages", null, {});
  },
};
