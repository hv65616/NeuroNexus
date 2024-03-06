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

const login = catchAsync(async (req, res, next) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role) {
    return next(
      new ErrorHandler("Please provide email,password and role", 400)
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 400));
  }
  const ispasswordmatch = await user.comparePassword(password);
  if (!ispasswordmatch) {
    return next(new ErrorHandler("Invalid email or password", 400));
  }
  if (user.role !== role) {
    return next(new ErrorHandler("User with this role not found", 400));
  }
  sendToken(user, 200, res, "User Logged in successfully");
});

const logout = catchAsync(async (req, res, next) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      msg: "User logout successfully",
    });
});

module.exports = { register, login, logout };
