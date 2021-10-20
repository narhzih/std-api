const AppError = require("../utils/errors/appError");

exports.register = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return next(new AppError("You cannot leave any field empty", 400));
  }
};
exports.login = (req, res) => {};
exports.protect = (req, res, next) => {};
exports.getLoggedInUser = (req, res) => {};
