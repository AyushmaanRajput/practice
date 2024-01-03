const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.register = async (req, res, next) => {
  let { fullname, username, password, email } = req.body;
  let avatar;
  if (req.file) {
    avatar = req.file.path;
  }
  console.log(req.file, avatar);

  try {
    let user = await User.findOne({ username: username });
    if (user)
      return res
        .status(403)
        .json({ message: "User with this username already exists" });
    let userWithEmail = await User.findOne({ email: email });
    if (userWithEmail)
      return res
        .status(403)
        .json({ message: "User with this email already exits" });

    bcrypt.hash(password, 8, async function (err, hash) {
      // Error hashing password
      if (err) {
        return res.status(500).json({ message: "Failed To Create new User" });
      }
      console.log(hash);
      let newUser = new User({
        fullname,
        username,
        email,
        password: hash,
        avatar: avatar
          ? avatar
          : `https://eu.ui-avatars.com/api/?name=${fullname
              .split(" ")
              .join("+")}&size=250%22`,
        quizzes: [],
      });
      console.log(newUser);
      await newUser.save();

      return res
        .status(201)
        .json({ message: "Registration Successfull", newUser });
    });
  } catch (err) {
    return res.status(400).json({ message: "Registration Failed, Try again" });
  }
};

exports.login = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    let existingUser = await User.findOne({ username });
    if (!existingUser)
      return res
        .status(404)
        .json({ message: "User not found, Try Registering" });
    bcrypt.compare(password, existingUser.password, async (err, result) => {
      if (result) {
        const token = jwt.sign(
          { userId: existingUser._id, username: existingUser.username },
          process.env.JWT_KEY,
          { expiresIn: "1hr" }
        );
        res.cookie("uid", token);
        return res.status(200).json({ message: "Login Successfull!" });
      } else {
        return res.status(400).json({ message: "Incorrect Password" });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: "Login Failled" });
  }
};

exports.logout = (req, res, next) => {};
