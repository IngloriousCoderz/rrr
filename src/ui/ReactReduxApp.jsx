import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import rootReducer from '../logic/todos'
import { fetchTodos } from '../logic/todos/actions'
import rootSaga from '../logic/todos/sagas'
import Form from './components/Form'
import Todos from './components/Todos'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(rootSaga)

store.dispatch(fetchTodos())

const TodosPage = () => (
  <Provider store={store}>
    <div id="app">
      <Form />
      <Todos />
    </div>
  </Provider>
)

export default TodosPage
