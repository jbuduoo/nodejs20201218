#　nodejs筆記

## 安裝Node.js 去這裡 https://nodejs.org

## 看版本:node –-version

## 執行:node hello.js 
然後到localhos3000看執行的狀況



## 获取 URL 的参数:https://www.runoob.com/nodejs/node-js-get-post.html

```
var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
 
}).listen(3000);
```
https://www.runoob.com/nodejs/node-js-get-post.html


## finish20201218是的完成品。

## 获取 POST 请求内容： https://www.runoob.com/nodejs/node-js-get-post.html













官方網站:https://nodejs.dev/learn/making-http-requests-with-nodejs
參考文:https://ithelp.ithome.com.tw/articles/10184550
