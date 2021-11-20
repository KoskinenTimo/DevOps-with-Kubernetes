const express = require('express');
const fs = require('fs')
const cors = require('cors')
const path = require('path')
const axios = require('axios')

const app = express();

app.use(cors())
app.use(express.json());

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const imagePath = path.join(directory, 'image.jpg')
const timeStampPath = path.join(directory, 'timestamp.txt')

let todos = [
  'this is the first TODO',
  "this is the second TODO"
];

app.get("/todoapi", (req,res) => {
  res.send(todos);
});

app.post("/todoapi", (req,res) => {
  const { todo } = req.body;
  console.log(todo);
  if (todo && todo.length) {
    todos = todos.concat(todo);    
  }
  res.send(todo);
});

app.get('/todoapi/timestamp', (req,res) => {
  const text = fs.readFileSync(timeStampPath);
  res.send(text)
})

app.get('/todoapi/randomimg', async (req,res) => {
  if (!fs.existsSync(imagePath)) {
    const res = await axios.get('https://picsum.photos/200', { responseType: 'stream' });
    res.data.pipe(fs.createWriteStream(imagePath));
  }
  res.sendFile(imagePath);
})

module.exports = app;