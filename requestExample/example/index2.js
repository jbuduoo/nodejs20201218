var http = require("http");

http.createServer(function(request, response) {
  var url = request.url;
  var method = request.method;

  console.log(method, url);
  if (url === '/page1') {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(
      "<!DOCTYPE html>" + 
      "<html>" +
        "<body>" +
          "<h1>page1</h1>" +
        "</body>" +
      "</html>"
    );
  } else if (url === '/page2'){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(
      "<!DOCTYPE html>" + 
      "<html>" +
        "<body>" +
          "<h1>page2</h1>" +
        "</body>" +
      "</html>"
    );
  } else {
    response.writeHead(404);
  }
  
  response.end();
}).listen(8888);