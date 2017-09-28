import React from 'react'
import PropTypes from 'prop-types'

import stylish from './hoc/stylish'

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

export default stylish({
  background: 'lightgrey',
  border: '1px solid grey'
})(Form)
