var http = require('http');
var https = require('https');
let reqData;
let result;



const data = JSON.stringify({'address':'新北市永和區永貞路1號'});

// 用于请求的选项
var options = {
    host: 'c4-tw-nonprod-uat.apigee.net',
    path: '/api/v1/postOffice/postGetZipCode',
    method: 'POST',
    headers: {
        'content-Type': 'application/json'
    }

};



var svr = http.createServer(function (req, resp) {
    // console.log(req.method, req.url);
    // console.log("req",req)  
    // console.log("req.data",JSON.stringify(req.data))
    // console.log("req.header",JSON.stringify(req.headers.address))


   // 向服务端发送请求
        new Promise((resolve, reject) => {
        console.log("16")
            
            var reqZip = https.request(options, 
             function (response) {
                            // 不断更新数据
                            console.log("17")
                var body = '';
                response.on('data', function (data) {
                    body += data;
                });
    
                response.on('end', function () {
                    // 数据接收完成
                    result = JSON.parse(body);
                    console.log("2", result);
                    resolve();
                });
    
            }
            );
            reqZip.write(data);
            reqZip.end();
    
            console.log("3", result);
    
        }).then(resolve => {
            resp.setHeader("Content-Type", "application/json");
            resp.end(JSON.stringify({ date: new Date(), msg: result }));
        }).catch((error)=>{
            console.error(error);
        });



});

svr.listen(process.env.PORT || 3000, function () {
    console.log('Node HTTP server is listening');
});