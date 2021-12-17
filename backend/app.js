var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const db = require("./models");

// var usersRouter = require("./routes/users");

// connect and sync to the database
(async (sequelize, env) => {
  console.log("Connecting to the database..");
  try {
    await sequelize.authenticate();
    console.log("Connection successful!");

    console.log("Synchronizing models with the database...");
    if (env === "production") {
      await sequelize.sync();
    } else {
      await sequelize.sync({ force: true });
    }
  } catch (err) {
    console.error(err);
  }
})(db.sequelize, db.env);

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use("/users", usersRouter);

module.exports = app;
