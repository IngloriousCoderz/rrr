import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { compose, pure } from 'recompose'
import { connect } from 'react-redux'

import stylish from './hoc/stylish'
import Todo from './Todo'
import { getTodos } from '../../logic/todos'
import { toggleDone } from '../../logic/todos/actions'

const mapStateToProps = state => ({ todos: getTodos(state) })
const mapDispatchToProps = { toggleDone }

const enhance = compose(
  stylish({
    background: 'cornflowerblue',
    border: '1px solid grey',
    borderTop: null,
    boxShadow: '0 5px 5px grey'
  }),
  connect(mapStateToProps, mapDispatchToProps),
  pure
)

const Todos = ({ todos, toggleDone }) => (
  <ul>
    {todos.map(({ id, text, done }) => (
      <Todo key={id} id={id} text={text} done={done} toggleDone={toggleDone} />
    ))}
  </ul>
)

Todos.propTypes = {
  todos: ImmutablePropTypes.listOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.boolean
    })
  ).isRequired
}

export default enhance(Todos)
