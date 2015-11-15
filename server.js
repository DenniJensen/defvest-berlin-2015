var express = require('express');
var app = express();

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/scripts',  express.static(__dirname + '/app/scripts'));
app.use('/views',  express.static(__dirname + '/app/views'));
app.use('/styles',  express.static(__dirname + '/app/styles'));
app.use('/images',  express.static(__dirname + '/app/images'));

app.get('/', function(req, res) {
  res.sendfile('app/index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
