import { call, put } from 'redux-saga/effects'

import { setTodos } from '../actions'

function* fetchTodos(action) {
  const response = yield call(fetch, 'http://localhost:3001/todos')
  const todos = yield response.json()
  yield put(setTodos(todos))
}

export default fetchTodos
