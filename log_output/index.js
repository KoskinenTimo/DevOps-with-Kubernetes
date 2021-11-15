const { v4: uuidv4 } = require('uuid');

const logRandomString = () => {
  const string = uuidv4();
  setInterval(() => {
    const ts = Math.round((new Date()).getTime() / 1000);
    const date = new Date();
    const timeStamp = date.toISOString();
    console.log(`${timeStamp}: ${string} v0.2`);
  }, 5000)
}

logRandomString();