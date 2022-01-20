const express = require("express");
const router = express.Router();

// /auth/login
router.post("/login", function (req, res, next) {
  res.status(405).json({
    message: "Verifys login for user and returns auth token",
    warning: "Endpoint not yet configured",
  });
});

// /auth/signup
router.post("/signup", function (req, res, next) {
  res.status(405).json({
    message: "Creates user in the database and returns auth token",
    warning: "Endpoint not yet configured",
  });
});

module.exports = router;
