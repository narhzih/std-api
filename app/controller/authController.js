var userModelClass = require("./../models/userModel");
const AppError = require("../utils/errors/appError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const catchAsync = require("./../utils/errors/catchAsyncError");

const createToken = (userRef) => {
  return jwt.sign({ ref: userRef }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const tokenIsValid = (token) => {};

exports.register = catchAsync(async (req, res, next) => {
  const userModel = new userModelClass();
  let { username, email, password, passwordConfirm } = req.body;
  if (!username || !email || !password) {
    return next(new AppError("You cannot leave any field empty", 400));
  }
  if (password !== passwordConfirm) {
    return next(new AppError("Passwords do not match", 400));
  }

  password = await bcrypt.hash(password, 12);
  const user = await userModel.createUser({ username, email, password });
  const token = createToken(user.ref);
  user.password = null;
  res.status(201).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
  // Create user and issue JWT for user
});
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("You cannot leave any field empty"));
  }
  const userModel = new userModelClass();
  const user = await userModel.getUserByEmail(email);
  if (user) {
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (passwordIsValid) {
      const token = createToken(user.ref);
      user.password = null;
      res.status(200).json({
        status: "success",
        token,
        data: {
          user,
        },
      });
    } else {
      return next(
        new AppError("Incorrect email and password combination", 400)
      );
    }
  } else {
    return next(new AppError("Incorrect email and password combination", 400));
  }
});
exports.getLoggedInUser = (req, res) => {};
