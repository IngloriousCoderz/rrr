import { select, call, put } from 'redux-saga/effects'

import { getText } from '..'
import { setText, fetchTodos } from '../actions'

function* addTodo(action) {
  const text = yield select(getText)
  yield call(fetch, 'http://localhost:3001/todos', {
    method: 'POST',
    body: JSON.stringify({ text }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  yield put(setText(''))
  yield put(fetchTodos())
}

export default addTodo
