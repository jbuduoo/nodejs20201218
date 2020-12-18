
//沒有辦法執行，因為是本地端postman無法打本地端的位置。
var http = require('http');

const server = http.createServer((req, res) => {
    // we can access HTTP headers
    req.on('data', chunk => {
      console.log(`Data chunk available: ${chunk}`)
    })
    req.on('end', () => {
      //end of data
    })
  })

  server.listen(process.env.PORT || 3000, function() {
   console.log('Node HTTP server is listening');
  });
