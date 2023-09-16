const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  "file-demo": {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", ImageSchema);
