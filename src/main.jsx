import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from './App.jsx'
import './index.css'
import Game from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game/>
  </StrictMode>,
)
