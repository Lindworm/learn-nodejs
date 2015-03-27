var express = require('express');
var log4js = require('log4js');

var logger = log4js.getLogger();

var app = express();
app.get('/hello',  function(request, response) {
  response.send('hello world');
});

app.listen(3000, function() {
  logger.info('server is running.');
});
