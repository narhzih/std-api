var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(201).json({
    message: "Hello with you",
  });
});

module.exports = router;
