var express = require('express');
var router = express.Router();
var multer = require('multer');
var converter = require('pdf-converter');

router.post('/', function(req, res, next) {
  const url = req.body.url;

  converter.convertToMarkdownUrl(url).then((content) =>{
    res.status(200).send(content);
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Something broke!');
  });
});

module.exports = router;
