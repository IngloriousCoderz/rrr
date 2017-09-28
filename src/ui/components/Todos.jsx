import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todos extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  }

  render() {
    const { todos } = this.props

    return <ul>{todos.map(({ id, text }) => <li key={id}>{text}</li>)}</ul>
  }
}

export default Todos
