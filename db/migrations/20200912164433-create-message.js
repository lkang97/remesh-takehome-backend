"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Messages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      text: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dateTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      conversationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Conversations" },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Messages");
  },
};
