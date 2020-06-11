const http = require('http');

http.createServer((req,res)=> {
    res.writeHead(200, {'content-Type':'text/plain'});
    res.end('Hola mundo')
}).listen(8000);

console.log('Servidor funcinando en http://localhost:8000/')