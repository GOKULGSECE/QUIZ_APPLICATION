import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CardContextProvider } from './Context/cardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </React.StrictMode>,
)
