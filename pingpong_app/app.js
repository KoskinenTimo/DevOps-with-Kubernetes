const express = require('express');
const app = express();
let visits = 0;

app.get('/pingpong', (req,res) => {
  visits++;
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from(`<h1>Visits: ${visits}</h1>`));
});

module.exports = app;