const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 3001
const STATUS_CREATED = 201
const STATUS_NO_CONTENT = 204

let ID = 1
let todos = [
  {
    id: ID++,
    text: 'Todo 1'
  },
  {
    id: ID++,
    text: 'Todo 2'
  },
  {
    id: ID++,
    text: 'Todo 3'
  }
]

const app = express()
app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.json())

app.get('/todos', (request, response) => {
  response.json(todos)
})

app.get('/todos/:id', (request, response) => {
  const index = findIndex(request)
  const todo = todos[index]
  response.json(todo)
})

app.post('/todos', (request, response) => {
  const todo = Object.assign({ id: ID++ }, request.body)
  todos = [...todos, todo]
  response.status(STATUS_CREATED).json(todo)
})

app.put('/todos/:id', (request, response) => {
  const index = findIndex(request)
  const todo = request.body
  todos = [...todos.slice(0, index), todo, ...todos.slice(index + 1)]
  response.status(STATUS_NO_CONTENT).send()
})

app.patch('/todos/:id', (request, response) => {
  const index = findIndex(request)
  const todo = Object.assign(todos[index], request.body)
  todos = [...todos.slice(0, index), todo, ...todos.slice(index + 1)]
  response.status(STATUS_NO_CONTENT).send()
})

app.delete('/todos/:id', (request, response) => {
  const index = findIndex(request)
  todos = [...todos.slice(0, index), ...todos.slice(index + 1)]
  response.status(STATUS_NO_CONTENT).send()
})

app.delete('/todos', (request, response) => {
  todos = []
  response.status(STATUS_NO_CONTENT).send()
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

function findIndex(request) {
  return todos.findIndex(({ id }) => id === parseInt(request.params.id, 10))
}
