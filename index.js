const http = require("http")

http.createServer((req,resp)=>{
    console.log(req);
    resp.end("hello!!! a message from server")

}).listen(8000)