const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req);
res.write(`this is from the response`);
res.end();
});

server.listen(5000);