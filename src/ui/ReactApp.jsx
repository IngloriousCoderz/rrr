import React, { Component } from 'react'

import Form from './components/FormContainer'
import Todos from './components/Todos'

let ID = 1

class App extends Component {
  state = {
    todos: [
      { id: ID++, text: 'Todo 1' },
      { id: ID++, text: 'Todo 2' },
      { id: ID++, text: 'Todo 3' }
    ]
  }

  addTodo = text => {
    this.setState(prevState => ({
      todos: [...this.state.todos, { id: ID++, text }]
    }))
  }

  render() {
    return (
      <div id="app">
        <Form addTodo={this.addTodo} />
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App
