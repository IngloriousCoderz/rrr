import React from 'react'
import { compose, withHandlers, pure } from 'recompose'

const styles = {
  done: {
    textDecoration: 'line-through'
  }
}

const enhance = compose(
  withHandlers({
    toggleDone: ({ id, done, toggleDone }) => () => toggleDone(id, done)
  }),
  pure
)

const Todo = ({ text, done, toggleDone }) => (
  <li style={done ? styles.done : null} onClick={toggleDone}>
    {text}
  </li>
)

export default enhance(Todo)
