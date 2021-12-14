module.exports = {
  development: {
    storage: "./db-dev.sqlite3",
    dialect: "sqlite"
  },
  test:
    storage: ":memory",
    dialect: "sqlite"
  },
  production: {
    dialect: "mysql"
  }
};
