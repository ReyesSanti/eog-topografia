import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Fuentes auto-hospedadas (sin CDN de Google → CSP más estricta y mejor privacidad)
import '@fontsource-variable/inter'
import '@fontsource-variable/manrope'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
