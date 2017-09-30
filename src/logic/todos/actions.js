import * as types from './actionTypes'

export const setText = text => ({ type: types.SET_TEXT, payload: text })

export const fetchTodos = () => ({ type: types.FETCH_TODOS_SAGA })
export const setTodos = todos => ({ type: types.SET_TODOS, payload: todos })

export const addTodo = () => ({ type: types.ADD_TODO_SAGA })
// export const addTodo = todo => ({ type: types.ADD_TODO, payload: todo })

export const removeTodo = id => ({ type: types.REMOVE_TODO, payload: id })

export const toggleDone = id => ({ type: types.TOGGLE_DONE_SAGA, payload: id })
// export const toggleDone = id => ({ type: types.TOGGLE_DONE, payload: id })

export const clear = () => ({ type: types.CLEAR })
