"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init(
    {
      // foreign key
      userID: DataTypes.INTEGER,
      postID: DataTypes.INTEGER,
      // foreign key
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

