"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, {
        foreignKey: { fieldName: "userId", allowNull: false },
        onDelete: "CASCADE",
      });
      User.hasMany(models.Post, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      User.hasMany(models.Comment, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      User.hasMany(models.Follow, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
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
