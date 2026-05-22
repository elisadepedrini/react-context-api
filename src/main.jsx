import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as bootstrap from 'bootstrap'
// Supports weights 300-700
import '@fontsource-variable/comfortaa/wght.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
