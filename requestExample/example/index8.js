const https = require('http');

//取得localhost/放入地址---ok

const options = {
  hostname: 'whatever.com',
  port: 443,
  path: 'http://localhost:8080/getZipCode?address=%E6%96%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%92%8C%E5%8D%80%E6%B0%91%E6%B2%BB%E8%A1%97',
  method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Content-Length': data.length
  // }
}


const req = https.request(options, resp => {
//https.get('http://localhost:8080/getZipCode?address=%E6%96%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%92%8C%E5%8D%80%E6%B0%91%E6%B2%BB%E8%A1%97', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    process.stdout.write(chunk)
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
