module.exports = {
  development: {
    storage: "./db-dev.sqlite3",
    dialect: "sqlite",
  },
  test: {
    storage: ":memory:",
    dialect: "sqlite",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
  },
};
