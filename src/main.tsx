import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ContextWrapper from './components/ContextWrapper.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </StrictMode>,
)
