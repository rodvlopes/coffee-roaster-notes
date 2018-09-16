const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path')
const fs = require('fs');
const {Note} = require('./models')

const app = express();
app.use(fileUpload());

const USER_PICS_DIR = '../public/userpics'
const acceptedPicsExtension = (fname) => /jpg|png|gif$/i.test(fname)

Note.list().then(console.log)

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// rid: recipe id
// TODO> rename action to userpics
app.post('/api/upload/:rid', function(req, res) {
  // console.log(req.files.file); // the uploaded file object
  console.log(req.params.rid);
  if (isNaN(req.params.rid))
    return res.status(400).send('Recipe id is required.');

  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  let rid = req.params.rid;
  let file = req.files.file;
  let ext = path.extname(file.name)
  file.mv(`${USER_PICS_DIR}/${rid}_${Date.now()}${ext}`, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

app.get('/api/userpics/:rid', function(req, res) {
  fs.readdir(USER_PICS_DIR, function (err, files) {
    if (err) {
      console.log(err);
      return res.status(400).send('Error reading userpics directory.');;
    }
    const rid = req.params.rid;
    const ridRegexp = new RegExp(`${rid}_.*`)
    const ridFilter = (fname) => ridRegexp.test(fname)
    res.json(files.filter(acceptedPicsExtension).filter(ridFilter))
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
