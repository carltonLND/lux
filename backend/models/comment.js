"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: { fieldName: "userId", allowNull: false },
        onDelete: "CASCADE",
      });
      Comment.belongsTo(models.Post, {
        foreignKey: { fieldName: "postId", allowNull: false },
        onDelete: "CASCADE",
      });
    }
  }
  Comment.init(
    {
      content: { type: DataTypes.TEXT, allowNull: false },
      dateCommented: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "Comment",
      timestamps: false,
    }
  );
  return Comment;
};
