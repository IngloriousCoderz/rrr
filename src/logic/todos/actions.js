import * as types from './actionTypes'
import { getText, getTodo } from '.'

export const setText = text => ({ type: types.SET_TEXT, payload: text })

export const fetchTodos = () => dispatch =>
  fetch('http://localhost:3001/todos')
    .then(response => response.json())
    .then(todos => dispatch(setTodos(todos)))
export const setTodos = todos => ({ type: types.SET_TODOS, payload: todos })

export const addTodo = () => (dispatch, getState) =>
  fetch('http://localhost:3001/todos', {
    method: 'POST',
    body: JSON.stringify({ text: getText(getState()) }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then(() => dispatch(setText('')))
    .then(() => dispatch(fetchTodos()))
// .then(response => response.json())
// .then(todo => dispatch(addTodo(todo)))
// export const addTodo = todo => ({ type: types.ADD_TODO, payload: todo })

export const removeTodo = id => ({ type: types.REMOVE_TODO, payload: id })

export const toggleDone = id => (dispatch, getState) => {
  const todo = getTodo(getState(), id)
  return fetch(`http://localhost:3001/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ ...todo, done: !todo.done }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then(() => dispatch(fetchTodos()))
}
// export const toggleDone = id => ({ type: types.TOGGLE_DONE, payload: id })

export const clear = () => ({ type: types.CLEAR })
