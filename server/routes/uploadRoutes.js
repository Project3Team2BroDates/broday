import express from "express";
import upload from "./upload";

const router = express.Router();

router.post("/", upload.single("file-demo"), async (req, res) => {
    try {
        const file = req.file.filename;
        const newImage = {
            "file-demo": file
        };
        res.status(200).json(newImage);
    } catch (error) {
        res.status(409).json(error);
    }
});

export default router