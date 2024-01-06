import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main1 from './Main1.jsx'
import { BrowserRouter } from 'react-router-dom'
import Main2 from './Main2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Main2/>
    </BrowserRouter>
    
  </React.StrictMode>,
)
