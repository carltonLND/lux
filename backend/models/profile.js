"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: { fieldName: "userId", allowNull: false },
        onDelete: "CASCADE",
      });
    }
  }
  Profile.init(
    {
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
