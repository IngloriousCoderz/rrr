import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todos from '../logic/todos'
import Form from './components/FormContainer'
import Todos from './components/Todos'

const store = createStore(
  todos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const TodosPage = ({ addTodo, toggleDone }) => (
  <Provider store={store}>
    <div id="app">
      <Form />
      <Todos />
    </div>
  </Provider>
)

export default TodosPage
