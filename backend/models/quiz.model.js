const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: String,
  description: String,
  type: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  attempts: Number,
  completions: Number,
  avgScore: Number,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  rating: {
    rating: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
