import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <--- 1. Importa esto
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. Envuelve <App /> con <BrowserRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)