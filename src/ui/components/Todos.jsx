import React from 'react'
import PropTypes from 'prop-types'

import stylish from './stylish'

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

export default stylish({
  background: 'cornflowerblue',
  boxShadow: '0 5px 5px grey'
})(Todos)
