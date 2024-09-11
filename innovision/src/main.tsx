import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import './Global/global.css';
import './FormsLogin/forms.css';
import './LandingPage/home.css';
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
