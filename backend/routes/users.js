var express = require("express");
var router = express.Router();

// /users
router.get("/", function (req, res, next) {
  res.status(405).json({
    message: "Returns an array of all users",
    warning: "Endpoint not yet configured",
  });
});

router.post("/", function (req, res, next) {
  res.status(405).json({
    message: "Creates a new user in database",
    warning: "Endpoint not yet configured",
  });
});

// /users/:id
router.get("/:id", function (req, res, next) {
  res.status(405).json({
    message: "Returns a single users basic information",
    warning: "Endpoint not yet configured",
  });
});

// /users/:id/profile
router.get("/:id/profile", function (req, res, next) {
  res.status(405).json({
    message: "Returns a single users profile",
    warning: "Endpoint not yet configured",
  });
});

router.put("/:id/profile", function (req, res, next) {
  res.status(405).json({
    message: "Updates user profile with new information",
    warning: "Endpoint not yet configured",
  });
});

router.delete("/:id/profile", function (req, res, next) {
  res.status(405).json({
    message: "Deletes user profile",
    warning: "Endpoint not yet configured",
  });
});

// /users/follow/:id
router.post("/follow/:id", function (req, res, next) {
  res.status(405).json({
    message: "Creates follow relationhip with target user id",
    warning: "Endpoint not yet configured",
  });
});

router.delete("/follow/:id", function (req, res, next) {
  res.status(405).json({
    message: "Deletes relationship with target user id",
    warning: "Endpoint not yet configured",
  });
});

module.exports = router;
