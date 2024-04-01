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
    job,
  });
});

const getMyJobs = catchAsync(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker is not allowed to access this resouce", 400)
    );
  }
  const myjobs = await Job.find({ postedBy: req.user._id });
  res.status(200).json({
    success: true,
    myjobs,
  });
});

const updateJob = catchAsync(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker is not allowed to access this resouce", 400)
    );
  }
  const { id } = req.params;
  let job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("Oops, job not found!", 404));
  }
  job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    job,
    msg: "Job Updated Successfully",
  });
});

const deleteJob = catchAsync(async (req, res, next) => {
  const { role } = req.user;
  console.log("Hello");
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker is not allowed to access this resouce", 400)
    );
  }
  const { id } = req.params;
  let job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("Oops, job not found!", 404));
  }
  await job.deleteOne();
  res.status(200).json({
    success: true,
    msg: "Job deleted successfully",
  });
});

const getSingleJob = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);
    if (!id) {
      return next(new ErrorHandler("JOb not found", 404));
    }
    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    return next(new ErrorHandler("Invalid id/casterror", 404));
  }
});
module.exports = {
  getAllJobs,
  postJob,
  getMyJobs,
  updateJob,
  deleteJob,
  getSingleJob,
};
