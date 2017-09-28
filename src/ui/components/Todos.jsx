import React from 'react'
import PropTypes from 'prop-types'

import stylish from './hoc/stylish'

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
  border: '1px solid grey',
  borderTop: null,
  boxShadow: '0 5px 5px grey'
})(Todos)
