import React from 'react'

const DEFAULT_STYLE = {
  background: 'pink',
  padding: 5
}

const stylish = style => Enhanced => {
  const Stylish = props => (
    <div style={{ ...DEFAULT_STYLE, ...style }}>
      <Enhanced {...props} />
    </div>
  )
  return Stylish
}

export default stylish
