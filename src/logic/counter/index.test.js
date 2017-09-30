import counter, { increment, decrement, foocrement } from '.'

describe('counter app', () => {
  it('should increment counter', () => {
    const stateBefore = 0
    const action = increment()
    const stateAfter = 1

    expect(counter(stateBefore, action)).toBe(stateAfter)
  })

  it('should decrement counter', () => {
    const stateBefore = 1
    const action = decrement()
    const stateAfter = 0

    expect(counter(stateBefore, action)).toBe(stateAfter)
  })

  it('should do nothing', () => {
    const stateBefore = 2
    const action = foocrement()
    const stateAfter = stateBefore

    expect(counter(stateBefore, action)).toBe(stateAfter)
  })
})
