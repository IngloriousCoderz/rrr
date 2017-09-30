import { select, call, put } from 'redux-saga/effects'

import { getTodo } from '..'
import { fetchTodos } from '../actions'

function* toggleDone(action) {
  const { payload: id } = action
  const todo = yield select(getTodo, id)
  yield call(fetch, `http://localhost:3001/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ ...todo, done: !todo.done }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  yield put(fetchTodos())
}

export default toggleDone
