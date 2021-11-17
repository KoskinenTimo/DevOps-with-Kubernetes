const express = require('express');
const app = express();
const { promises: fsp } = require('fs');
const fs = require('fs');
const path = require('path')

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'visits.txt')


let visits = 0;


app.get('/pingpong', async (req,res) => {
  try {
    const exists = fs.existsSync(filePath);
    if (exists) {
      await fsp.readFile(filePath,'utf-8', (err,data) => {
        visits = parseInt(data);        
        });
    } 
    
    visits++
    await fsp.writeFile(filePath, visits.toString())
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from(`<h1>Visits: ${visits}</h1>`));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

});

module.exports = app;