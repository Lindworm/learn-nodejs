var log4js = require('log4js');
var express = require('express');

var logger = log4js.getLogger(__filename);
function square(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new Error("expected a number input.");
  }
  return Math.pow(n, 2);
};

var app = express();
app.get('/square', function(req, res) {
  var n = Number(req.query.n);
  try {
    res.send(String(square(n)));
  } catch(e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;

app.listen(3000, function() {
  logger.info('server is running.');
});
