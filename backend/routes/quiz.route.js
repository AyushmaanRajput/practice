const express = require("express");
const router = express.Router();

const quizController = require("../controllers/quiz.controller");
// const upload = require("../middlewares/upload.middleware");
const auth = require("../middlewares/auth.middleware");

router.use(auth);
// ADD NEW QUIZ ROUTE
router.post("/add", quizController.addQuiz);

module.exports = router;
