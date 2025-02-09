import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Accordian from './Accordian.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Accordian />
  </StrictMode>,
)
