import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Ex1 } from './ex1-dark-mode/Ex1'
import { NavBar } from './ex2-nav-bar/Narbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
)
