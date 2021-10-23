var userModelClass = require("./../models/userModel");
const AppError = require("../utils/errors/appError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const catchAsync = require("./../utils/errors/catchAsyncError");

const createToken = (userID) => {
  return jwt.sign({ id: userID }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.register = catchAsync(async (req, res, next) => {
  const userModel = new userModelClass();
  let { username, email, password, passwordConfirm } = req.body;
  if (!username || !email || !password) {
    return next(new AppError("You cannot leave any field empty", 400));
  }
  if (password !== passwordConfirm) {
    return next(new AppError("Passwords do not match", 400));
  }
  // Create user and issue JWT for user
});
exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("You cannot leave any field empty"));
  }
};
exports.protect = (req, res, next) => {};
exports.getLoggedInUser = (req, res) => {};
