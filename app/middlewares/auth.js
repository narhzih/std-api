var userModelClass = require("./../models/userModel");
const AppError = require("../utils/errors/appError");
const jwt = require("jsonwebtoken");
const catchAsync = require("./../utils/errors/catchAsyncError");
const util = require("util");

exports.protect = catchAsync(async (req, res, next) => {
  const userModel = new userModelClass();
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("You are not logged in!", 401));
  }

  const decoded = await util.promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  // Check if the user the token was issued for still exits
  const currentUser = await userModel.getUserByRef(decoded.ref);
  if (!currentUser) {
    return next(
      new AppError("The user belonging to this token no longer exist.", 401)
    );
  }

  // you still have to check if password was changed after the token was issued
  // TODO: you still have to check if password was changed after the token was issued

  req.user = currentUser;
  next();
});
