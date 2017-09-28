import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'

import Form from './components/FormContainer'
import Todos from './components/Todos'
import dataDriven from './components/hoc/dataDriven'
import stylish from './components/hoc/stylish'

// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

const enhance = compose(
  dataDriven('http://localhost:3001/todos'),
  stylish({ padding: 20 }),
  withHandlers({
    addTodo: ({ addItem }) => text => addItem({ text })
  })
)

const App = ({ data, addTodo }) => (
  <div id="app">
    <Form addTodo={addTodo} />
    <Todos todos={data} />
  </div>
)

App.propTypes = {
  data: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired
}

export default enhance(App)
