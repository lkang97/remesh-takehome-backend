"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Thoughts", {
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
      messageId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Messages" },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Thoughts");
  },
};
