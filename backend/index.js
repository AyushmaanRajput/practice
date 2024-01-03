const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connection = require("./connection");
require("dotenv").config();

const authRoutes = require("./routes/auth.route");
const quizRoutes= require("./routes/quiz.route");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/avatars", express.static("avatars"));

app.use("/auth", authRoutes);
app.use("/quiz",quizRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connect To DB");
    console.log("Server Runnning at PORT", process.env.PORT);
  } catch (error) {
    console.log(error);
    console.log("Failed to Connect to DB");
  }
});
