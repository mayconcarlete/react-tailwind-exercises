import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Ex1 } from './ex1-dark-mode/Ex1'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Ex1 />
  </React.StrictMode>,
)
