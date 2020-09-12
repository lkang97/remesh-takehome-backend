"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      conversationId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Message.associate = function (models) {
    Message.belongsTo(models.Conversation, { foreignKey: "conversationId" });
    Message.hasMany(models.Thought, { foreignKey: "messageId" });
  };
  return Message;
};
