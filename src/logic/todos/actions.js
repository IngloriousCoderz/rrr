import * as types from './actionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, payload: text })
export const removeTodo = id => ({ type: types.REMOVE_TODO, payload: id })
export const toggleDone = id => ({ type: types.TOGGLE_DONE, payload: id })
export const clear = () => ({ type: types.CLEAR })
