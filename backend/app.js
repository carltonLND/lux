const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./models");
const cors = require("cors");

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const authRouter = require("./routes/auth");

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

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: "https://lux.midasdesign.co.uk" }));

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

module.exports = app;
