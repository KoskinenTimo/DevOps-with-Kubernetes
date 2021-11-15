const http = require('http');

const server = http.createServer(function (req,res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
})

server.listen(3001);

console.log('Server started in port 3001');