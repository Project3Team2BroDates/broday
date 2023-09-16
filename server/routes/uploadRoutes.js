const express = require("express");
const upload = require("../config/upload");
const router = express.Router();
const Image = require("../models/Image");

router.post("/", upload.single("file-demo"), async (req, res) => {
  try {
    const file = req.file.filename;
    const newImage = new Image({ "file-demo": file });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    res.status(409).json({ error: error.toString() });
  }
});

module.exports = router;
