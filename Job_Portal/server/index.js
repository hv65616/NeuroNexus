const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");
const userRouter = require("./routes/userRoutes");
const applicationRouter = require("./routes/applicationRoutes");
const jobRouter = require("./routes/jobRoutes");
const dbConnection = require("./database/dbConnection");
const { errorMiddleware } = require("./middlewares/error");
const app = express();
dotenv.config({ path: "./config.env" });
dbConnection();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/temp/",
  })
);

app.use(errorMiddleware)

module.exports = app;
