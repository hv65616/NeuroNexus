const catchAsync = require("../middlewares/catchAsyncError");
const { ErrorHandler } = require("../middlewares/error");
const Job = require("../models/job");

const getAllJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.find({ expired: false });
  res.status(200).json({
    success: true,
    jobs,
  });
});
const postJob = catchAsync(async (req, res, next) => {
  const { role } = req.user;
//   console.log(role);
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker is not allowed to access this resouce", 400)
    );
  }
  const {
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
  } = req.body;
  if (!title || !description || !category || !country || !city || !location) {
    return next(new ErrorHandler("Please provide full job details", 400));
  }
  if ((!salaryFrom || !salaryTo) && !fixedSalary) {
    return next(
      new ErrorHandler(
        "Both Salary From and To or Fixed Salary are required",
        400
      )
    );
  }
  if (salaryFrom && salaryTo && fixedSalary) {
    return next(
      new ErrorHandler(
        "Cannot enter fixed salary and ranged salary together",
        400
      )
    );
  }
  const postedBy = req.user._id;
  const job = await Job.create({
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
    postedBy,
  });
  res.status(200).json({
    success: true,
    msg: "Job Posted successfully",
    job
  });
});
module.exports = { getAllJobs, postJob };
