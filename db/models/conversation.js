"use strict";
module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define(
    "Conversation",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Conversation.associate = function (models) {
    Conversation.hasMany(models.Message, { foreignKey: "conversationId" });
  };
  return Conversation;
};
