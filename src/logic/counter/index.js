// import { createStore } from 'redux'
const { createStore } = require('redux')

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const increment = () => ({
  type: INCREMENT
})

const decrement = () => ({
  type: DECREMENT
})

const foocrement = () => ({
  type: 'foo'
})

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

const listener = () => console.log(store.getState())

store.subscribe(listener)

// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(foocrement())
// store.dispatch(decrement())

export default counter
export { increment, decrement, foocrement }
