/**
 *  a example show you the usage of express.  
 */
/*
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.listen(3000);

app.use(cookieParser());

app.get('/', function (req, res) {
  if (req.cookies.isVisit) {
    console.log(req.cookies);
    res.send("welcome visit again:" + req.cookies.user);
  } else {
    res.cookie('isVisit', 1,  {maxAge: 60 * 1000});
    res.cookie('user', 'kay', {maxAge: 30 * 1000});
    res.send("Welcome visit first time!");

  }
});
*/

var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');

var app = express();
app.listen(5000);

// middleware for express
app.use(session({
  secret: 'recommand 128 bytes random string',
  store: new RedisStore({
    host: '192.168.214.137',
    port: 6379,
    pass: 'redis'
  }),
  cookie: { maxAge: 60 * 1000 }
}));
app.use(cookieParser());

app.get('/', function (req, res) {

  if(req.session.isVisit) {
    req.session.isVisit++;
    res.send('<p>The ' + req.session.isVisit + ' times visit this page.</p>');
  } else {
    req.session.isVisit = 1;
    res.send("Welcome visit first time!");
  }
  console.log(req.cookies);
  console.log(req.session);
});
