"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init(
    {
      userID: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
      dateJoined: { type: DataTypes.DATE, allowNull: false },
      phone: DataTypes.INTEGER,
      twitter: DataTypes.STRING,
      facebook: DataTypes.STRING,
      pintrest: DataTypes.STRING,
      instagram: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Profile",
      timestamps: false,
    }
  );
  return Profile;
};
