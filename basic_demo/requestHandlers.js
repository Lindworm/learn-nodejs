var exec = require('child_process').exec();


function start(response) {
  console.info('Request handler start() invoked!');  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write('start...');
  response.end();
}

function upload(response) {
  console.info('Request handler upload() invoked!');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write('upload...');
  response.end();
}

exports.start = start;
exports.upload = upload;
