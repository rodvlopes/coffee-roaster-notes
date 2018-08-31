const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/upload', function(req, res) {
  // console.log(req.files.file); // the uploaded file object
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  let file = req.files.file;

  file.mv(`./uploaded_files/${file.name}`, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
