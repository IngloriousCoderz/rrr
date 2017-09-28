import React, { Component } from 'react'

let ID = 1

class App extends Component {
  state = {
    todos: [
      { id: ID++, text: 'Todo 1' },
      { id: ID++, text: 'Todo 2' },
      { id: ID++, text: 'Todo 3' }
    ]
  }

  onSubmit = event => {
    event.preventDefault()
    this.addTodo(this.input.value)
    this.input.value = ''
  }

  addTodo = text => {
    this.setState(prevState => ({
      todos: [...this.state.todos, { id: ID++, text }]
    }))
  }

  render() {
    return (
      <div id="app">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref={ref => (this.input = ref)} />
        </form>
        <ul>
          {this.state.todos.map(({ id, text }) => <li key={id}>{text}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
