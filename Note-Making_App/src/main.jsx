import Header from './Header'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App'
createRoot(document.getElementById('root')).render(
    <>
    <Header />
    <App />
    </>
    
)
