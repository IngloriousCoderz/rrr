import { List } from 'immutable'
import { createSelector } from 'reselect'

import { ADD_TODO, REMOVE_TODO, TOGGLE_DONE, CLEAR } from './actionTypes'
import todo, * as fromTodo from './todo'

const getTodos = state => state
const getTodo = (state, index) => state.get(index)
const isDone = (state, index) => fromTodo.isDone(getTodo(state, index))

const areAllDone = createSelector(
  getTodos,
  state => console.log('(re)computing') || state.every(fromTodo.isDone)
)

const todos = (state = List(), action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TODO:
      return state.push(payload)
    case REMOVE_TODO:
      return state.delete(payload)
    case TOGGLE_DONE:
      return state.set(payload, todo(state.get(payload), action))
    case CLEAR:
      return state.clear()
    default:
      return state
  }
}

export default todos
export { isDone, areAllDone }
