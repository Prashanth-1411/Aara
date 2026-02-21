import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/custom.scss'
import App from './App.jsx'

// Import Google Fonts (dynamically or add to index.html, here just ensuring css loads)
// We should add the link tag to index.html for fonts


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
