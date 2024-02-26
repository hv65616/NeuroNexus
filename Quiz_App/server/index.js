const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"})

const app = express();
const port = process.env.PORT || 8081;

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.json("Root Route");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
