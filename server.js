var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var path = require('path');
var options = {
  index: "index.html",
  extensions: ['htm', 'html']
};

app.use("/", express.static('/content', options));

var server = app.listen(port, function () {
  var host = server.address().address;
  console.log('my app is listening at http://%s:%s (node port, not Docker port)', host, port);
});
