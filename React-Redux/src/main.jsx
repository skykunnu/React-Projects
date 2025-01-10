import {Provider} from "react-redux"
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './store'
import Counter from "./Counter.jsx"


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Counter />
    </Provider>
  
)
