const axios = require('axios');
let site = ''
const fetchsite = async() => {
  const response = await axios('https://en.wikipedia.org/wiki/Special:Random')
  site = response.request.res.responseUrl;
}

const addTodo = async () => {
  const response = await axios.post("http://todo-app-svc:2345/todoapi", { todo:`Visit ${site}` })
}

const asyncs = async () => {
  await fetchsite();
  await addTodo();
}
asyncs();