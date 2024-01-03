const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  comment: String,
  quiz: { type: Schema.Types.ObjectId, ref: "Quiz" },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
