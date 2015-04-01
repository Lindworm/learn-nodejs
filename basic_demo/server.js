var http = require("http");
var url = require("url");
var formidable = require('formidable');
var util = require('util');

function start(route, handler) {

  http.createServer(function(request, response) {
    
    var url = request.url;
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    
    
    /*
    request.setEncoding("utf-8");
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+postDataChunk + "'.");
    });

    request.addListener('end', function() {
      route(pathname, handler, response);
    });
    */

    if (pathname == '/upload' && request.method.toLowerCase() == 'post') {
      var form = new fromidable.IncomingForm();
      form.parse(request, function(err, fields, files) {
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.write('received upload:\n\n');
        response.end(util.inspect({fields: fields, files: files}));
      });
      return;
    }

    // show a file upload form
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
    );
    
  }).listen(8888, '127.0.0.1');
  
  console.log('Server running at http://127.0.0.1:8888/');
}

exports.start = start;
