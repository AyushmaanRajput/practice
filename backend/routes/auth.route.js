const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const upload = require("../middlewares/upload.middleware");

// REGISTER ROUTE
router.post("/register", upload.single("avatar"), authController.register);

// LOGIN ROUTE
router.post("/login", authController.login);

// LOGOUT ROUTE
router.post("/logout", authController.logout);

module.exports = router;
