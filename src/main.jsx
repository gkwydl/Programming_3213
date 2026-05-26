import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import TodoListApp from './TodoListApp.jsx'
import HomeApp from './HomeApp.jsx'
import RouterApp from './RouterApp.jsx'
import "./assets/font/font.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
