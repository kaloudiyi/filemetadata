var express = require('express');
var path = require('path');
var multer = require('multer');
var port = process.env.PORT || 3000


var app = express();

var upload = multer();

app.get('/', function(req, res) {
	res.sendFile(path.resolve('./index.html'));
});

app.post('/', upload.single('userfile'), function (req, res) {
  var obj = {size: req.file.size};
  res.json(obj);
})

app.listen(port, function() {
	console.log('Node.js listening on port ' + port)
})
