import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from "./views/Home"
import { SobreNosotros } from './views/SobreNosotros'
import { Contacto } from './views/Contacto'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
