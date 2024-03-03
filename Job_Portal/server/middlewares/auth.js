const jsonwebtoken = require("jsonwebtoken");
const catchAsync = require("./catchAsyncError");
const { ErrorHandler } = require("./error");
const User = require("../models/user");
const isauth = catchAsync(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return next(new ErrorHandler("User not authorized", 400));
  const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded);
  next();
});

module.exports = isauth;
