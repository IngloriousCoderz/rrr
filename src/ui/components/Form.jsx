import React from 'react'
import PropTypes from 'prop-types'
import { compose, pure } from 'recompose'
import { connect } from 'react-redux'

import stylish from './hoc/stylish'
import { getText } from '../../logic/todos'
import { setText, addTodo } from '../../logic/todos/actions'

const mapStateToProps = state => ({ text: getText(state) })
const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(setText(event.target.value)),
  onSubmit: event => {
    event.preventDefault()
    dispatch(addTodo())
  }
})

const enhance = compose(
  stylish({
    background: 'lightgrey',
    border: '1px solid grey'
  }),
  connect(mapStateToProps, mapDispatchToProps),
  pure
)

const Form = ({ text, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={text} onChange={onChange} />
  </form>
)

Form.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default enhance(Form)
