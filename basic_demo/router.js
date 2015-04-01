function route(pathname, handler, response) {
  
  console.log("About to route a request for " + pathname);  

  if (typeof handler[pathname] == 'function') {
    handler[pathname](response);
  } else {
    response.writeHead(404, {"Content-Type":"text/plain"});
    response.write('404 NOT FOUND');
    response.end();
  }
}

exports.route = route;
