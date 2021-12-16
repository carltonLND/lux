"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      // foreign key
      userID: DataTypes.INTEGER,
      content: { type: DataTypes.STRING, allowNull: false },
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

