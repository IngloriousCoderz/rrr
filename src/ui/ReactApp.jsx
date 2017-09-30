import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import TodosPage from './TodosPage'
import ConfirmationPage from './ConfirmationPage'

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Todos</Link> | <Link to="/confirm-clear">Clear?</Link>
      </nav>
      <Route path="/" component={TodosPage} exact />
      <Route path="/confirm-clear" component={ConfirmationPage} />
    </div>
  </Router>
)

export default App
