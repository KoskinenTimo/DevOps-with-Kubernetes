const express = require('express');
const cors = require('cors')
const app = express();

// const fs = require('fs');

app.use(cors())

let visits = 0;

app.get('/pingapi/pingpong', async (req,res) => {
  try {
    // const exists = fs.existsSync(filePath);
    // if (exists) {
    //   await fsp.readFile(filePath,'utf-8', (err,data) => {
    //     visits = parseInt(data);
    //     });
    // }
    // visits++
    // await fsp.writeFile(filePath, visits.toString())
    visits++
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from(`<h1>Visits: ${visits}</h1>`));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('/pingapi/visits', (req,res) => {
  res.status(200).send(visits.toString());
});

app.use((req,res,next) => {
  res.set('Content-Type', 'text/html')
  res.status(404).send(Buffer.from(`<h1>PAGE/ROUTE NOT FOUND!</h1>`));
});

module.exports = app;