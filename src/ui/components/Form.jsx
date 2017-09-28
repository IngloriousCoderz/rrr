import React from 'react'
import PropTypes from 'prop-types'

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

export default Form
