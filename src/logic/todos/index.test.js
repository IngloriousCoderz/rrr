import { List } from 'immutable'

import todos, { isDone, areAllDone } from '.'
import * as actions from './actions'

describe('todos app', () => {
  it('should add a todo', () => {
    const stateBefore = List([
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: false }
    ])
    const action = actions.addTodo({ text: 'Todo 3', done: false })
    const stateAfter = List([
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: false },
      { text: 'Todo 3', done: false }
    ])

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should remove a todo', () => {
    const stateBefore = List([
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: false },
      { text: 'Todo 3', done: false }
    ])
    const action = actions.removeTodo(1)
    const stateAfter = List([
      { text: 'Todo 1', done: true },
      { text: 'Todo 3', done: false }
    ])

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should toggle the done property to a todo', () => {
    const stateBefore = List([
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: false }
    ])
    const action = actions.toggleDone(1)
    const stateAfter = List([
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: true }
    ])

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should clear all todos', () => {
    const stateBefore = List([
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: false }
    ])
    const action = actions.clear()
    const stateAfter = List([])

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should check the done property of todos', () => {
    const state = List([
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: false }
    ])

    expect(isDone(state, 0)).toBe(true)
    expect(isDone(state, 1)).toBe(false)

    expect(areAllDone(state)).toBe(false)
    expect(areAllDone(state)).toBe(false)

    const newState = todos(state, actions.toggleDone(1))
    expect(areAllDone(newState)).toBe(true)
    expect(areAllDone(newState)).toBe(true)
  })
})
