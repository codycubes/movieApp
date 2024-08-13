const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set storage engine
const storage = multer.diskStorage({
  destination: './public',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single('file');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ msg: 'Error uploading file' });
    }
    res.json({ filePath: `/${req.file.filename}` });
  });
});

app.use(express.static('public'));

app.listen(5001, () => {
  console.log('Upload server started on http://localhost:5001');
});
