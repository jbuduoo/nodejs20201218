var http = require('http');
var https = require('https');
let result;

// 用于请求的选项
var options = {
    host: 'c4-tw-nonprod-uat.apigee.net',
    path: '/api/v1/postOffice/postGetZipCode',
    method: 'POST',
    headers: {
        'content-Type': 'application/json; charset=utf-8'
    }
};


var svr = http.createServer(function (req, resp) {

    var query = require('url').parse(req.url,true).query;
    var address = query.address;

    console.log("req.address",address)
    let respdata=JSON.stringify({'address':address});

   // 向服务端发送请求
        new Promise((resolve, reject) => {

            var reqZip = https.request(options, 
             function (response) {
                // 不断更新数据
                var body = '';
                response.on('data', function (data) {
                    body += data;
                });
    
                response.on('end', function () {
                    // 数据接收完成
                    result = JSON.parse(body);
                    resolve();
                });
    
            }
            );
            reqZip.write(respdata);
            reqZip.end();
    
            console.log("3", result);
    
        }).then(resolve => {
            if(result.length > 0){
                // 向服务端发送请求
                new Promise((resolve, reject) => {
                        
                    var reqZip = https.request(options, 
                    function (response) {
                        // 不断更新数据
                        var body = '';
                        response.on('data', function (data) {
                            body += data;
                        });

                        response.on('end', function () {
                            // 数据接收完成
                            result += JSON.parse(body);
                            resolve();   //有了這個就可以跳到then
                        });
                    }
                    );
                    reqZip.write(data);
                    reqZip.end();

                }).then(resolve => {
                    resp.setHeader("Content-Type", "application/json");
                    resp.end(JSON.stringify({ date: new Date(), msg: result }));
                }).catch((error)=>{
                    console.error(error);
                });


            }

            resp.setHeader("Content-Type", "application/json");
            resp.end(JSON.stringify({ date: new Date(), msg: result }));
        }).catch((error)=>{
            console.error(error);
        });

});

svr.listen(process.env.PORT || 3000, function () {
    console.log('Node HTTP server is listening');
});