const mongoose = require("mongoose");
const validator = require("validator");
const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    minLength: [3, "Name must contain atleast three characters"],
    maxLength: [30, "Name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    validator: [validator.isEmail, "Invalid Email Id"],
  },
  coverLetter: {
    type: String,
    required: [true, "Please provide your cover letter"],
  },
  phone: {
    type: Number,
    required: [true, "Please provide your Phone Number"],
  },
  address: {
    type: String,
    required: [true, "Please provide your address"],
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  applicantID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Job Seeker"],
      required: true,
    },
  },
  employerID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Employer"],
      required: true,
    },
  },
});
const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
