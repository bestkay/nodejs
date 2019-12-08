var http = require('http');

http.createServer(function(request, response) {

    // 发送 HTTP 头部
    // HTTP状态值：200：ok
    // 内容类型：text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello World!\n'); //发送响应数据 "Hello World!"

}).listen(8080);

//终端打印如下信息
console.log('Server runing at http://127.0.0.1:8080');