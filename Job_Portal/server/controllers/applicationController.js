const { application } = require("express");
const catchAsync = require("../middlewares/catchAsyncError");
const { ErrorHandler } = require("../middlewares/error");
const Application = require("../models/application");

const employerGetAllApplications = catchAsync(async (req, res, next) => {
  const {role} = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker is not allowed to access this resouce", 400)
    );
  }
  const { _id } = req.user;
  const application = await Application.find({ "employerID.user": _id });
  res.status(200).json({
    success: true,
    application,
  });
});

const jobSeekerGetAllApplications = catchAsync(async (req, res, next) => {
  const {role} = req.user;
  if (role === "Employer") {
    return next(
      new ErrorHandler("Employer is not allowed to access this resouce", 400)
    );
  }
  const { _id } = req.user;
  const application = await Application.find({ "applicantID.user": _id });
  res.status(200).json({
    success: true,
    application,
  });
});

const jobSeekerDeleteApplication = catchAsync(async (req, res, next) => {
  const {role} = req.user;
  if (role === "Employer") {
    return next(
      new ErrorHandler("Job Seeker is not allowed to access this resouce", 400)
    );
  }
  const { id } = req.params;
  const application = await Application.findById(id);
  if (!application) {
    return next(new ErrorHandler("No application found with that ID.", 404));
  }
  await application.deleteOne();
  res.status(200).json({
    success: true,
    message: `Deleted application with the id of ${id}`,
  });
});

module.exports = {
  employerGetAllApplications,
  jobSeekerGetAllApplications,
  jobSeekerDeleteApplication,
};
