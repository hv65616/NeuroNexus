const jwt = require("jsonwebtoken");
const sendToken = (user, statusCode, res, message) => {
  const payload = { id: user._id };
  // const token = user.getJWTToken();

  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
module.exports = sendToken;
