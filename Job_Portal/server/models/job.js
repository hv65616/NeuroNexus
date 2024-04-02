const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide job title"],
    minLength: [3, "Job title must contain atleast 3 characters"],
    maxLength: [50, "Job title cannot exceed  30 characters"],
  },
  description: {
    type: String,
    required: [true, "Please provide job description"],
    minLength: [3, "Job description must contain atleast 3 characters"],
    maxLength: [50, "Job description cannot exceed  30 characters"],
  },
  category: {
    type: String,
    required: [true, "Job category is required"],
  },
  country: {
    type: String,
    required: [true, "Job country is required"],
  },
  city: {
    type: String,
    required: [true, "Job city is required"],
  },
  location: {
    type: String,
    required: [true, "Please provide exact location"],
    minLength: [10, "Job location must contain at least 10 characters"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Fixed salary must contain atleast 4 digits"],
    maxLength: [9, "Fixed salary connot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary From must contain atleast 4 digits"],
    maxLength: [9, "Salary From cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "Salary To must contain at least 4 digits"],
    maxLength: [9, "Salary To cannot exceed 9 digits"],
  },
  expired: {
    type: String,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now(),
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
