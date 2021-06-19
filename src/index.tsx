import React from 'react'
import ReactDOM from 'react-dom'

// @ts-ignore
import UIkit from 'uikit/dist/js/uikit.min.js'
// @ts-ignore
import Icons from 'uikit/dist/js/uikit-icons.min.js'
import './styles.scss'

UIkit.use(Icons)

// components
import App from './components/App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)
