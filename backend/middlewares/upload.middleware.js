const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "avatars");
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniquePrefix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
