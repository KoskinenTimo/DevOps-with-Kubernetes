const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors())
app.use(express.json());

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const timeStampPath = path.join(directory, 'timestamp.txt')

app.get('/logapi/pongs', async (req,res) => {
  let visits = 0;
  try {
    // http://localhost:3001/pingapi/visits
    const res = await axios('http://pingpong-app-svc:3456/pingapi/visits');
    visits = res.data;    
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
  res.send(`Ping / Pongs: ${visits}`);
});

app.get('/logapi/timestamp', (req,res) => {
  const text = fs.readFileSync(timeStampPath);
  const id = uuidv4();
  res.send(`${text}: ${id}.`);
});

module.exports = app;