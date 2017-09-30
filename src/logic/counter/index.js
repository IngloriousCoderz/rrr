// import { createStore } from 'redux'
const { createStore } = require('redux')
const { Map } = require('immutable')

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

const getCount = state => state.get('count')

const counter = (state = Map({ count: 0 }), action) => {
  switch (action.type) {
    case INCREMENT:
      return state.set('count', state.get('count') + 1)
    case DECREMENT:
      return state.set('count', state.get('count') - 1)
    case SET_COUNT:
      return state.set('count', action.payload)
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
