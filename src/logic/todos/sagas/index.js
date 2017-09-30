import { takeLatest } from 'redux-saga/effects'

import {
  FETCH_TODOS_SAGA,
  ADD_TODO_SAGA,
  TOGGLE_DONE_SAGA
} from '../actionTypes'
import fetchTodos from './fetchTodos'
import addTodo from './addTodo'
import toggleDone from './toggleDone'

function* rootSaga() {
  yield takeLatest(FETCH_TODOS_SAGA, fetchTodos)
  yield takeLatest(ADD_TODO_SAGA, addTodo)
  yield takeLatest(TOGGLE_DONE_SAGA, toggleDone)
}

export default rootSaga
