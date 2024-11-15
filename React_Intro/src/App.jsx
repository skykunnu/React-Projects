import { useState } from 'react'
import googleLogo from './assets/google.svg'
import InstaLogo from './assets/Insta.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [DecCount, DecrementCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={InstaLogo} className="logo" alt="Insta logo" />
        </a>
        <a href="https://www.google.co.in/" target="_blank">
          <img src={googleLogo} className="logo react" alt="google logo" />
        </a>
      </div>
      <h1>Instagram + Google</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          IncrementCount is {count}
        </button>
        <button onClick={() => DecrementCount((DecCount) => DecCount - 1)}>
          DecrementCount is {DecCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
