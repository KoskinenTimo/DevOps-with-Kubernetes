const http = require('http');
const app = require('./app');
const sequelizeInstance = require('./util/database');
const server = http.createServer(app)


const start = async () => {
  try {
    await sequelizeInstance.sync();
    server.listen(3002, () => {
      console.log('Server started in port 3002');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
