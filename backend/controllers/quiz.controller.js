exports.addQuiz = (req, res, next) => {
  console.log(req.user);
  return res.json({ message: "In quiz controller" });
};
