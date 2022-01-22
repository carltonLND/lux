const express = require("express");
const router = express.Router();

// /posts
router.get("/", function (req, res, next) {
  res.status(405).json({
    message: "Returns an array of a users posts",
    warning: "Endpoint not yet configured",
  });
});

router.post("/", function (req, res, next) {
  res.status(405).json({
    message: "Creates a new post in database",
    warning: "Endpoint not yet configured",
  });
});

// /posts/stream
router.get("/stream", function (req, res, next) {
  res.status(405).json({
    message: "Returns an array of posts from user and following",
    warning: "Endpoint not yet configured",
  });
});

// /posts/:id
router.get("/:id", function (req, res, next) {
  res.status(405).json({
    message: "Returns a specific post and all related comments",
    warning: "Endpoint not yet configured",
  });
});

router.put("/:id", function (req, res, next) {
  res.status(405).json({
    message: "Edits a users own post content",
    warning: "Endpoint not yet configured",
  });
});

router.delete("/:id", function (req, res, next) {
  res.status(405).json({
    message: "Deletes a users own post and all related comments",
    warning: "Endpoint not yet configured",
  });
});

router.post("/:id", function (req, res, next) {
  res.status(405).json({
    message: "Posts a new comment to specific post",
    warning: "Endpoint not yet configured",
  });
});

module.exports = router;
