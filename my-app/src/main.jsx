import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'styles/index.css'
import 'styles/style.css'
import App from './App.jsx'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <StrictMode>
      <App />
    </StrictMode>
  </RecoilRoot>
)