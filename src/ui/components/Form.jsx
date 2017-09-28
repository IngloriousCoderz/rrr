import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  onSubmit = event => {
    const { addTodo } = this.props
    event.preventDefault()
    addTodo(this.input.value)
    this.input.value = ''
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref={ref => (this.input = ref)} />
      </form>
    )
  }
}

export default Form
