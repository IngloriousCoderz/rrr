// import { createStore } from 'redux'
const { createStore } = require('redux')

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const SET_COUNT = 'SET_COUNT'

const increment = () => ({
  type: INCREMENT
})

const decrement = () => ({
  type: DECREMENT
})

const foocrement = () => ({
  type: 'foo'
})

const setCount = count => ({
  type: SET_COUNT,
  payload: count
})

const getCount = state => state.count

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    case SET_COUNT:
      return action.payload !== state.count ? { count: action.payload } : state
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
export { increment, decrement, foocrement, setCount, getCount }
