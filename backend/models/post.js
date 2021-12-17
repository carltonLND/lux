"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey: { fieldName: "userId", allowNull: false },
        onDelete: "CASCADE",
      });
      Post.hasMany(models.Comment, {
        foreignKey: "postId",
        onDelete: "CASCADE",
      });
    }
  }
  Post.init(
    {
      content: { type: DataTypes.TEXT, allowNull: false },
      likeCount: { type: DataTypes.INTEGER, defaultValue: 0 },
      commentCount: { type: DataTypes.INTEGER, defaultValue: 0 },
      datePosted: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "Post",
      timestamps: false,
    }
  );
  return Post;
};
