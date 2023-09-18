const express = require("express");
const upload = require("../config/upload");
const router = express.Router();
const User = require("../models/User");
const fs = require("fs");

router.post("/:userId", upload.single("file-demo"), async (req, res) => {
  try {
    console.log(req.file);
    const file = req.file;
    console.log("USER?", req.params);
    console.log("FILE INFO", file.path, file.destination);

    const newProfilePicName =
      "/" + req.params.userId + "." + file.filename.split(".").slice(-1);
    console.log(file.path, file.destination + newProfilePicName);
    fs.renameSync(file.path, file.destination + newProfilePicName);
    fs.copyFileSync(
      file.destination + newProfilePicName,
      file.destination.replace("build", "public") + newProfilePicName
    );
    // // get user
    // console.log("GET USER FROM DB", req.params.userId);
    const user = await User.findById(req.params.userId);
    // // update profilepic
    user.profilePic = "/uploads" + newProfilePicName;
    console.log("USERFROMDB", user);
    // // save user
    await user.save();

    res.status(201).json({ profilePic: user.profilePic });
  } catch (error) {
    res.status(409).json({ error: error.toString() });
  }
});

module.exports = router;