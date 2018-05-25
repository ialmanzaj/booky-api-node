var express = require('express'),
    router = express.Router(),
    converter = require('pdf-converter'),
    atob = require('atob');


var multer = require('multer');
var upload = multer().single()

router.route('/').post(upload, (req, res) => {
  const url = req.body.url;
  if (url) {
    converter.convertToMarkdownUrl(url).then(content => {
      res.status(200).send(content);
    }).catch(err => {
      console.log(err);
      res.status(500).send('Something broke!');
    });
  }else {
    const buffer = req.body;
    console.log('buffer ', buffer);
  }
});


const example = 'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
  'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
  'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
  'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
  'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
  'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
  'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
  'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
  'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
  'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
  'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
  'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
  'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G';


  router.route('/convert').post(upload, (req, res, next) => {

    upload(req, res, (err) => {
      if (err) {
        // An error occurred when uploading
        console.log('An error occurred when uploading');
        return
      }

      console.log('All good');

      const file = req.files;
      const body = req.body;

      console.log('body', body);
      console.log('file', file);



      //const obj = req.body;
      //const buffer = obj.book;
      //console.log('buffer', buffer);
      //const pdfData = atob(buffer);
      res.status(200);
      res.send('good from now');
    });

    /*
    if (buffer) {
        converter.convertToMarkdownBuffer({data: pdfData}).then(content => {
          //console.log("content ", content);
          res.status(200).send(content);
        }).catch((err) => {
          console.log(err);
          res.status(500).send('Something broke!');
        });
    }
    */

  });
/*

router.route('/convert').post(upload, (req, res) => {
  console.log('convert');
  const file = req.file;
  const obj = req.body;
  const buffer = obj.book;
  console.log('buffer', buffer);
  const pdfData = atob(buffer);

  if (buffer) {
      converter.convertToMarkdownBuffer({data: pdfData}).then(content => {
        //console.log("content ", content);
        res.status(200).send(content);
      }).catch((err) => {
        console.log(err);
        res.status(500).send('Something broke!');
      });
  }

});

*/


module.exports = router;
