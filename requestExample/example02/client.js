var https = require('https');
var result;
// 用于请求的选项
var options = {
   method: 'POST',
   headers:{
      'content-Type':'application/json'
   }
     
};
const data = JSON.stringify({
   address: '新北市永和區永貞路1號'
 })

// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });

   response.on('end', function() {
      // 数据接收完成
      result=JSON.parse(body)
      console.log(result.data);
      if(JSON.stringify(result.data).length > 0){
         console.log("hello world!!")
      }
   });
}
// 向服务端发送请求
var req = https.request('https://c4-tw-nonprod-uat.apigee.net//api/v1/postOffice/postGetZipCode',options, callback);
req.write(data)
req.end();
