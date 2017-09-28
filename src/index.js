import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './ui/ReactApp'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
