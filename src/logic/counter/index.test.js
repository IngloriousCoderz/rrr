import counter, {
  increment,
  decrement,
  foocrement,
  setCount,
  getCount
} from '.'

describe('counter app', () => {
  it('should increment counter on increment action', () => {
    const stateBefore = { count: 0 }
    const action = increment()
    const stateAfter = { count: 1 }

    expect(counter(stateBefore, action)).toEqual(stateAfter)
  })

  it('should decrement counter on decrement action', () => {
    const stateBefore = { count: 1 }
    const action = decrement()
    const stateAfter = { count: 0 }

    expect(counter(stateBefore, action)).toEqual(stateAfter)
  })

  it('should do nothing on other actions', () => {
    const stateBefore = { count: 2 }
    const action = foocrement()
    const stateAfter = stateBefore

    expect(counter(stateBefore, action)).toBe(stateAfter)
  })

  it('should return same state when action does not change it', () => {
    const stateBefore = { count: 2 }
    const action = setCount(2)
    const stateAfter = stateBefore

    expect(counter(stateBefore, action)).toBe(stateAfter)
  })

  it('should select the count property', () => {
    const state = { count: 3 }

    expect(getCount(state)).toBe(3)
  })
})
