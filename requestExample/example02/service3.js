var http = require('http');
var https = require('https');
var result;
// 用于请求的选项
var options = {
    method: 'POST',
    headers: {
        'content-Type': 'application/json'
    }
};
const data = JSON.stringify({
    address: '新北市永和區永貞路1號'
})

var svr = http.createServer(function (req, resp) {
    console.log(req.method, req.url);

    // 向服务端发送请求
    new Promise((resolve, reject) => {

        var reqZip = https.request('https://c4-tw-nonprod-uat.apigee.net//api/v1/postOffice/postGetZipCode', options, 
         function (response) {
                        // 不断更新数据
            var body = '';
            response.on('data', function (data) {
                body += data;
            });

            response.on('end', function () {
                // 数据接收完成
                result = JSON.parse(body)
                console.log("2", result)
                resolve();
            });

        }
        );
        reqZip.write(data)
        reqZip.end();

        console.log("3", result)

    }).then(resolve => {

        console.log("1", result)
        resp.setHeader("Content-Type", "application/json");
        resp.end(JSON.stringify({ date: new Date(), msg: result }));
    }).catch(new Function());
    console.log("4", result)

});

svr.listen(process.env.PORT || 3000, function () {
    console.log('Node HTTP server is listening');
});
