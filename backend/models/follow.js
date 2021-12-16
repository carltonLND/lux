"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Follow.init(
    {
      userID: { type: DataTypes.INTEGER, allowNull: false },
      followedUser: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Follow",
      timestamps: false,
    }
  );
  return Follow;
};

