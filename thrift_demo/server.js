var thrift = require("thrift");
var Calculator = require("./gen-nodejs/Calculator");
var ttype = require("./gen-nodejs/tutorial_types");
var moment = require("moment");

var User = require("./gen-nodejs/tutorial_types").User;



var log4js = require("log4js");

var logger = log4js.getLogger(__filename);

var server = thrift.createServer(Calculator, {
  
  ping: function(result) {
    logger.debug("ping method invoked!");
    result(null);
  },
  add: function(n1, n2, result) {
    logger.debug("add method invoked!");
    result(null, n1 + n2);
  },
  //User getUserById(1:i32 id)
  getUserById: function(id, result) {
    logger.debug("getUserById method invoked!");
    var user = new User();
    user.id = 12;
    user.name = '小名';
    user.createTime = moment().format("YYYY-MM-DD HH:mm:ss");
    result(null, user);
  }
  
}, {});


server.listen(9090);
logger.info("server started!");

