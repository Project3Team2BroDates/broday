import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../public/images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '--' + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype.includes('jpeg') ||
      file.mimetype.includes('png') ||
      file.mimetype.includes('jpg')
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

export default upload.single('file-demo');


// In your Express routes, you can import and use the Multer middleware as needed for specific routes where you want to handle file uploads.

// import express from 'express';
// import upload from '../config/upload'; // Import Multer middleware

// const router = express.Router();

// router.post('/', upload, async (req, res) => {
//   // Handle file upload here
//   const file = req.file.filename;
//   // ...
// });

// export default router;