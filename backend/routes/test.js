let express = require("express");
let router = express.Router();
let db = require("../models")

router.get("/", async function (req, res, next) {
  await db.Test.sync({ force: true });
  await db.Test.create({ firstName: "C", lastName: "J"});
});

module.exports = router;
