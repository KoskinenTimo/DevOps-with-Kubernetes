const express = require('express');
const fs = require('fs')
const cors = require('cors')
const path = require('path')
const axios = require('axios')
const Todo = require('./models/todos')
const app = express();

app.use(cors())
app.use(express.json());

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const imagePath = path.join(directory, 'image.jpg')



app.get("/todoapi", async (req,res) => {
  let todos = await Todo.findAll()
  if (!todos.length) {
    await Todo.create({ text: "First todo!"});
    await Todo.create({ text: "Second todo!"})
  }
  todos = await Todo.findAll()
  res.send(todos);
});

app.post("/todoapi", async (req,res) => {
  const { todo } = req.body;
  if (todo) {
    try {
      const savedTodo = await Todo.create({ text: todo});
      res.send(savedTodo);
    } catch (error) {
      res.status(500).end()
      console.log(error);
    }
  } else {
    res.status(400).end();
  }

});

app.get('/todoapi/randomimg', async (req,res) => {
  if (!fs.existsSync(imagePath)) {
    const res = await axios.get('https://picsum.photos/200', { responseType: 'stream' });
    res.data.pipe(fs.createWriteStream(imagePath));
  }
  res.sendFile(imagePath);
});

module.exports = app;