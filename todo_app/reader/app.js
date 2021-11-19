const { default: axios } = require('axios');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')
const { v4: uuidv4 } = require('uuid');

const directory = path.join('/', 'usr', 'src', 'app', 'files');

const visitsPath = path.join(directory, 'visits.txt');
const timeStampsPath = path.join(directory, 'timestamp.txt');

app.use(express.static(directory));
app.use(express.static('public'))

app.use( async (req,res, next) => {
  let timestamp = '';
  let visits = '';
  const id = uuidv4();

  try {
    const visitsResponse = await axios('http://pingpong-app-svc:3456/visits');
    if (visitsResponse && visitsResponse.data) {
      visits = visitsResponse.data.visits;
    }
    if (fs.existsSync(timeStampsPath)) {
      const timeStampData = fs.readFileSync(timeStampsPath);  
      timestamp = timeStampData;
    }
  } catch (error) {
    console.log(error);
  }
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from(`
    <div>
      <h3>${timestamp}: ${id}</h3>
      <h3>Visits: ${visits}</h3>
      <img src="/image.jpg"/>
      <form id="todo-form" method="post">
        <input id="todo-input"/>
        <button id="todo-submit" type="submit">Create TODO</button>
      <form>
    <div>
    <ul id="todo-list"></ul>
    <script src="/index.js"></script>
  `));
});

module.exports = app;