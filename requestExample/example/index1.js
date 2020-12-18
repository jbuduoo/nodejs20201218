var http = require("http");

http.createServer(function(request, response) {
  var url = request.url;
  var method = request.method;

  console.log(method, url);

  // 這個 200 就是 http status 200，代表成功的意思
  // cotent type 是指回應的內容是純文字
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (url === '/hello') {
    response.write("哈囉");
  } else {
    response.write('hey~~');
  }
  
  response.end();
}).listen(8888);