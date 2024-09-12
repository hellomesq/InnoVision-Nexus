import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import './Global/global.css';
import './FormsLogin/forms.css'; /* obs: esta bugado a estilização*/
import './LandingPage/home.css' /* obs: esta bugado a estilização*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
