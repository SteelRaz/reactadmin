import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import storeContent from './app/storeContent.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={storeContent}>
      <App />
    </Provider>
  </StrictMode>
)
