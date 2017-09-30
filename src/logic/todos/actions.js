import * as types from './actionTypes'

export const addTodo = index => ({ type: types.ADD_TODO, payload: index })
export const removeTodo = index => ({ type: types.REMOVE_TODO, payload: index })
export const toggleDone = index => ({ type: types.TOGGLE_DONE, payload: index })
export const clear = () => ({ type: types.CLEAR })
