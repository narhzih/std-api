var express = require("express");
var router = express.Router();
const authController = require("./../app/controller/authController");
const authMiddleware = require("./../app/middlewares/auth");
const userController = require("./../app/controller/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(201).json({
    message: "Hello with you",
  });
});
router.post("/register", authController.register);
router.post("/login", authController.login);

router.use(authMiddleware.protect);
router.use("/auth-test", userController.testCall);
module.exports = router;
