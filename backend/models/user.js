"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      private: { type: DataTypes.BOOLEAN, defaultValue: 0 },
      followerCount: { type: DataTypes.INTEGER, defaultValue: 0 },
      followingCount: { type: DataTypes.INTEGER, defaultValue: 0 },
      location: { type: DataTypes.STRING, allowNull: false },
      // add default url string
      pictureUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: false,
    }
  );
  return User;
};
