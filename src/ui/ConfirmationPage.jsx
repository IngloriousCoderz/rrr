import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose, withHandlers, pure } from 'recompose'

import dataDriven from './components/hoc/dataDriven'

const enhance = compose(
  dataDriven('http://localhost:3001/todos'),
  withRouter,
  withHandlers({
    confirmClear: ({ clearData, history }) => () =>
      clearData().then(() => history.replace('/')),
    cancelClear: ({ history }) => () => history.replace('/')
  }),
  pure
)

const ConfirmationPage = ({ confirmClear, cancelClear }) => (
  <div>
    <h1>Warning</h1>
    <p>Do you really want to wipe all your todos?</p>
    <button onClick={confirmClear}>Hell yeah!</button>
    <button onClick={cancelClear}>No way!</button>
  </div>
)

export default enhance(ConfirmationPage)
