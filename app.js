 const http = require('http');


 const port = 3000;

 const server = http.createServer((req,res) => {
       res.writeHead(200 , {'content-type': 'text/html; charset = utf-8'});
       res.write("<b>Hello </b>Wold");
       res.end();
     });

server.listen(port,() => {
    console.log("Output: http://localhost:"+port+"/");
});