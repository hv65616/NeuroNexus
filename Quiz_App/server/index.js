const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("../server/router/routes");
const connect = require("../server/database/connection");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 8081;

// app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Root Route");
  } catch (error) {
    console.log(error);
  }
});

connect()
  .then(() => {
    try {
      app.listen(port, (req, res) => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (error) {
      console.log("Cannot  Connect to Server!");
    }
  })
  .catch((error) => {
    console.log("Invalid Database Connection");
  });
