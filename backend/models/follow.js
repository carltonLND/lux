"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    static associate(models) {
      Follow.belongsTo(models.User, {
        foreignKey: { fieldName: "userId", allowNull: false },
        onDelete: "CASCADE",
      });
      Follow.belongsTo(models.User, {
        foreignKey: { fieldName: "followedUserId", allowNull: false },
      });
    }
  }
  Follow.init({}, { sequelize, modelName: "Follow", timestamps: false });
  return Follow;
};
