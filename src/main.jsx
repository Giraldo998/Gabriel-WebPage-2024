import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GabrielPage } from './GabrielPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GabrielPage />
  </StrictMode>,
)
