import { Map } from 'immutable'

import counter, {
  increment,
  decrement,
  foocrement,
  setCount,
  getCount
} from '.'

describe('counter app', () => {
  it('should increment counter on increment action', () => {
    const stateBefore = Map({ count: 0 })
    const action = increment()
    const stateAfter = Map({ count: 1 })

    expect(counter(stateBefore, action)).toEqual(stateAfter)
  })

  it('should decrement counter on decrement action', () => {
    const stateBefore = Map({ count: 1 })
    const action = decrement()
    const stateAfter = Map({ count: 0 })

    expect(counter(stateBefore, action)).toEqual(stateAfter)
  })

  it('should do nothing on other actions', () => {
    const stateBefore = Map({ count: 2 })
    const action = foocrement()
    const stateAfter = stateBefore

    expect(counter(stateBefore, action)).toBe(stateAfter)
  })

  it('should return same state when action does not change it', () => {
    const stateBefore = Map({ count: 2 })
    const action = setCount(2)
    const stateAfter = stateBefore

    expect(counter(stateBefore, action)).toBe(stateAfter)
  })

  it('should select the count property', () => {
    const state = Map({ count: 3 })

    expect(getCount(state)).toBe(3)
  })
})
