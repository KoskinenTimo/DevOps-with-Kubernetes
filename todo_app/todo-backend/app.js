const express = require('express');
const fs = require('fs')
const cors = require('cors')
const path = require('path')
const axios = require('axios')
const Todo = require('./models/todos')
const app = express();
const morgan = require('morgan')



app.use(cors())
app.use(express.json());
app.use(morgan('combined'));

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
  try {
    const savedTodo = await Todo.create({ text: req.body.todo});
    console.log(savedTodo.dataValues);
    res.send(savedTodo);
  } catch (error) {
    if (error.name === 'SequelizeValidationError' || 
        error.name === 'SequelizeUniqueConstraintError') {
          console.log({error:error.errors[0].message});
      return res.status(400).json({error:error.errors[0].message});
    }
    res.status(500).end();
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