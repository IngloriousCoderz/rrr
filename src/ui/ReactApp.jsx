import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Form from './components/FormContainer'
import Todos from './components/Todos'
import dataDriven from './components/hoc/dataDriven'

class App extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired
  }

  addTodo = text => {
    const { addItem } = this.props
    addItem({ text })
  }

  render() {
    const { data } = this.props
    return (
      <div id="app">
        <Form addTodo={this.addTodo} />
        <Todos todos={data} />
      </div>
    )
  }
}

export default dataDriven('http://localhost:3001/todos')(App)
