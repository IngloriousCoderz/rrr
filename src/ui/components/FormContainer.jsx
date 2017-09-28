import React, { PureComponent } from 'react'

import Form from './Form'

class FormContainer extends PureComponent {
  state = { text: '' }

  onChange = event => {
    this.setText(event.target.value)
  }

  setText = text => {
    this.setState(prevState => ({ text }))
  }

  onSubmit = event => {
    const { addTodo } = this.props
    event.preventDefault()
    addTodo(this.state.text)
    this.setText('')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.text !== this.state.text
  // }

  render() {
    return (
      <Form
        text={this.state.text}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default FormContainer
