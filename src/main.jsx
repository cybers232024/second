import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Dd from 'd.html';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Dd/>
  </StrictMode>,
)
