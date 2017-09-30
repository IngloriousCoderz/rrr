import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers, pure } from 'recompose'

import Form from './components/FormContainer'
import Todos from './components/Todos'
import dataDriven from './components/hoc/dataDriven'
import stylish from './components/hoc/stylish'

// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

const enhance = compose(
  dataDriven('http://localhost:3001/todos'),
  stylish({ padding: 20 }),
  withHandlers({
    addTodo: ({ addItem }) => text => addItem({ text }),
    toggleDone: ({ updateItem }) => (id, done) =>
      updateItem(id, { done: !done })
  }),
  pure
)

const App = ({ data, addTodo, toggleDone }) => (
  <div id="app">
    <Form addTodo={addTodo} />
    <Todos todos={data} toggleDone={toggleDone} />
  </div>
)

App.propTypes = {
  data: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired
}

export default enhance(App)
