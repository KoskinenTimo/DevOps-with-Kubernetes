const http = require('http');

const server = http.createServer((req,res) => {
  if (req.url == '/') {
    const date = new Date();
    const timeStamp = date.toISOString();
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(
      `<h1>${timeStamp} Exercise 1.07</h1>`
    );
    res.end();
  }
});

server.listen(3001, () => {
  console.log('Server started in port 3001');
});