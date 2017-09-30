import counter, { increment, decrement, foocrement, getCount } from '.'

describe('counter app', () => {
  it('should increment counter', () => {
    const stateBefore = { count: 0 }
    const action = increment()
    const stateAfter = { count: 1 }

    expect(counter(stateBefore, action)).toEqual(stateAfter)
  })

  it('should decrement counter', () => {
    const stateBefore = { count: 1 }
    const action = decrement()
    const stateAfter = { count: 0 }

    expect(counter(stateBefore, action)).toEqual(stateAfter)
  })

  it('should do nothing', () => {
    const stateBefore = { count: 2 }
    const action = foocrement()
    const stateAfter = stateBefore

    expect(counter(stateBefore, action)).toBe(stateAfter)
  })

  it('should select the count property', () => {
    const state = { count: 3 }

    expect(getCount(state)).toBe(3)
  })
})
