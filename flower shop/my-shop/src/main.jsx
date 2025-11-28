import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './styles/main.scss'
import App from './jsx/App'
import AppRoutes from './jsx/Routess'
import "./styles/blocks/root.scss";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
