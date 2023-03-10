import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Ex1 } from './ex1-dark-mode/Ex1'
import App from './ex2-nav-bar/Google'
import ImplicitFlow from './ex2-nav-bar/Google'
import NavBar from './ex2-nav-bar/Narbar'
import './index.css'
import {Provider} from "react-redux"
import { store } from './redux/store'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId='169818476393-p6k4htsmte2icvs39706u80b1huipqte.apps.googleusercontent.com'>
        <NavBar />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
)
