const catchAsync = require("../middlewares/catchAsyncError");
const { ErrorHandler } = require("../middlewares/error");
const Application = require("../models/application");
const cloudinary = require("cloudinary");
const Job = require("../models/job");
const employerGetAllApplications = catchAsync(async (req, res, next) => {
  const { role } = req.user;
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
  const { role } = req.user;
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
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ErrorHandler("Employer is not allowed to access this resouce", 400)
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

const postApplication = catchAsync(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ErrorHandler("Employer is not allowed to access this resouce", 400)
    );
  }
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Resume file required", 400));
  }
  const { resume } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
  if (!allowedFormats.includes(resume.mimetype)) {
    return next(
      new ErrorHandler(
        "Invalid file type. Please upload your resume in PNG,JPEG or WEBP"
      ),
      400
    );
  }
  const cloudinaryResponse = await cloudinary.uploader.upload(
    resume.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary Error - ",
      cloudinaryResponse.error || "Unknown cloudinary error"
    );
    return next(new ErrorHandler("Failed to upload resume", 500));
  }
  const resumeupload = {
    public_id: cloudinaryResponse.public_id,
    url: cloudinaryResponse.secure_url,
  };
  console.log(resumeupload);
  const { name, email, coverLetter, phone, address, jobId } = req.body;
  const applicantID = {
    user: req.user._id,
    role: "Job Seeker",
  };
  if (!jobId) {
    return next(new ErrorHandler("Job not found", 404));
  }
  const jobDetails = await Job.findById(jobId);
  if (!jobDetails) {
    return next(new ErrorHandler("Job not found", 404));
  }
  const employerID = {
    user: jobDetails.postedBy,
    role: "Employer",
  };
  if (
    !name ||
    !email ||
    !coverLetter ||
    !phone ||
    !address ||
    !applicantID ||
    !employerID ||
    !resume
  ) {
    return next(new ErrorHandler("Please fill all fields", 400));
  }
  console.log("Hello5");
  const application = await Application.create({
    name,
    email,
    coverLetter,
    phone,
    address,
    jobId,
    applicantID,
    employerID,
    resume: resumeupload,
  });
  res.status(200).json({
    success: true,
    msg: "Application submitted",
    application,
  });
});

module.exports = {
  employerGetAllApplications,
  jobSeekerGetAllApplications,
  jobSeekerDeleteApplication,
  postApplication,
};
