"use strict";
module.exports = (sequelize, DataTypes) => {
  const Thought = sequelize.define(
    "Thought",
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      messageId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Thought.associate = function (models) {
    Thought.belongsTo(models.Message, { foreignKey: "messageId" });
  };
  return Thought;
};
