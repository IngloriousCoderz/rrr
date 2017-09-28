import React from 'react'
import PropTypes from 'prop-types'

const Todos = ({ todos }) => (
  <ul>{todos.map(({ id, text }) => <li key={id}>{text}</li>)}</ul>
)

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Todos
