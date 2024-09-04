import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from '/src/components/themeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeContextProvider>,
)
