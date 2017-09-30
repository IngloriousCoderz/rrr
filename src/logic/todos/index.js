import { combineReducers } from 'redux'

import text, * as fromText from './text'
import todos, * as fromTodos from './todos'
import { ADD_TODO } from './actionTypes'
import { setText, addTodo } from './actions'

export const getText = state => fromText.getText(state.text)
export const getTodos = state => fromTodos.getTodos(state.todos)

const combined = combineReducers({ text, todos })

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: text(state.text, setText('')),
        todos: todos(state.todos, addTodo(state.text))
      }
    default:
      return combined(state, action)
  }
}

export default rootReducer
