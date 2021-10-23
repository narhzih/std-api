var express = require("express");
var router = express.Router();
const authController = require("../app/controller/authController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(201).json({
    message: "Hello with you",
  });
});
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
