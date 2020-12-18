const https = require('http');

//取得localhost/hello world!!-----ok
https.get('http://localhost:8080/hello', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
//    console.log(JSON.parse(data).explanation);
    console.log(data);
});

}).on("error", (err) => {
  console.log("Error: " + err.message);
});