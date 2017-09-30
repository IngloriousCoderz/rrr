import { List } from 'immutable'

import todos, { isDone, areAllDone } from './todos'
import * as actions from './actions'

describe('todos app', () => {
  it('should add a todo', () => {
    const stateBefore = List()
    const action = actions.addTodo('Todo 1')
    const stateAfter = List([{ id: 1, text: 'Todo 1' }])

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should remove a todo', () => {
    const stateBefore = List([
      { id: 1, text: 'Todo 1', done: true },
      { id: 2, text: 'Todo 2', done: false },
      { id: 3, text: 'Todo 3', done: false }
    ])
    const action = actions.removeTodo(2)
    const stateAfter = List([
      { id: 1, text: 'Todo 1', done: true },
      { id: 3, text: 'Todo 3', done: false }
    ])

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should toggle the done property to a todo', () => {
    const stateBefore = List([
      { id: 1, text: 'Todo 1', done: true },
      { id: 2, text: 'Todo 2', done: false }
    ])
    const action = actions.toggleDone(2)
    const stateAfter = List([
      { id: 1, text: 'Todo 1', done: true },
      { id: 2, text: 'Todo 2', done: true }
    ])

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should clear all todos', () => {
    const stateBefore = List([
      { id: 1, text: 'Todo 1', done: true },
      { id: 2, text: 'Todo 2', done: false }
    ])
    const action = actions.clear()
    const stateAfter = List([])

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should check the done property of todos', () => {
    const state = List([
      { id: 1, text: 'Todo 1', done: true },
      { id: 2, text: 'Todo 2', done: false }
    ])

    expect(isDone(state, 1)).toBe(true)
    expect(isDone(state, 2)).toBe(false)

    expect(areAllDone(state)).toBe(false)
    expect(areAllDone(state)).toBe(false)

    const newState = todos(state, actions.toggleDone(2))
    expect(areAllDone(newState)).toBe(true)
    expect(areAllDone(newState)).toBe(true)
  })
})
