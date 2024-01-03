const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname:String,
  username: String,
  password: String,
  email: String,
  avatar: String,
  quizzes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Quiz",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
