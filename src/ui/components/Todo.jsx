import React from 'react'
import { compose, withHandlers, pure } from 'recompose'
import styles from '../../app.scss'

const enhance = compose(
  withHandlers({
    toggleDone: ({ id, done, toggleDone }) => () => toggleDone(id, done)
  }),
  pure
)

const Todo = ({ text, done, toggleDone }) => (
  <li className={done ? styles.done : null} onClick={toggleDone}>
    {text}
  </li>
)

export default enhance(Todo)
