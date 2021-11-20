const http = require('http');
const app = require('./app');

const server = http.createServer(app)

server.listen(3003, () => {
  console.log('Server started in port 3003');
});