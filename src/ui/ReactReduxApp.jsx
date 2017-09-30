import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from '../logic/todos'
import { fetchTodos } from '../logic/todos/actions'
import Form from './components/Form'
import Todos from './components/Todos'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

store.dispatch(fetchTodos())

const TodosPage = ({ addTodo, toggleDone }) => (
  <Provider store={store}>
    <div id="app">
      <Form />
      <Todos />
    </div>
  </Provider>
)

export default TodosPage
