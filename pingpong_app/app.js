const express = require('express');
const cors = require('cors')
const Visit = require('./models/visits')

const app = express();
app.use(cors())

app.get('/pingapi/pingpong', async (req,res) => {
  try {
    await Visit.create({ date: new Date()})
    const response = await Visit.findAll({});
    console.log(response.length);
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from(`<h1>Visits: ${response.length}</h1>`));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('/pingapi/visits', async (req,res) => {
  let visits = 0;
  try {
    const response = await Visit.findAll({});
    if (response.length) {
      visits = response.length
    }
  } catch (error) {
    console.log(error)
  }
  res.status(200).send(visits.toString());
});

app.use((req,res,next) => {
  res.set('Content-Type', 'text/html')
  res.status(404).send(Buffer.from(`<h1>PAGE/ROUTE NOT FOUND!</h1>`));
});

module.exports = app;