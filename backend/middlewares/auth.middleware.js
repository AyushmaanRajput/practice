const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = (req, res, next) => {
  const token = req?.cookies?.uid || "";
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) return res.status(400).json({ message: "Unauthorized" });
      // console.log(decoded);
      req.user = { userId: decoded.userId, username: decoded.username };
      // console.log(req.user);
      next();
    });
  } else {
    return res.status(400).json({ message: "Unauthorized!" });
  }
};

module.exports = auth;
