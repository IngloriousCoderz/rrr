import { combineReducers } from 'redux'

import text, * as fromText from './text'
import todos, * as fromTodos from './todos'

export const getText = state => fromText.getText(state.text)
export const getTodos = state => fromTodos.getTodos(state.todos)
export const getTodo = (state, index) => fromTodos.getTodo(state.todos, index)

const rootReducer = combineReducers({ text, todos })

export default rootReducer
