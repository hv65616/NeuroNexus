const catchAsync = require("../middlewares/catchAsyncError");
const { ErrorHandler } = require("../middlewares/error");
const User = require("../models/user");
const sendToken = require("../utils/jwtToken");
const register = catchAsync(async (req, res, next) => {
  const { name, email, phone, role, password } = req.body;
  if (!name || !email || !phone || !role || !password) {
    return next(new ErrorHandler("Please provide all fields", 400));
  }
  const isemail = await User.findOne({ email });
  if (isemail) {
    return next(new ErrorHandler(`Email already in use`, 400));
  }
  const user = await User.create({
    name,
    email,
    phone,
    role,
    password,
  });
  sendToken(user, 200, res, "User Registered Successfully");
});

module.exports = register;
