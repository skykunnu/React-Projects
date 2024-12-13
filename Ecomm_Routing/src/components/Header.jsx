import { useContext } from "react"
import {Link} from "react-router-dom"
import { ecomcontext } from "../App"

function Header() {
  const {cart}=useContext(ecomcontext)
  return (
    <header>
      <h1>Myntra</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Cart">Cart({cart.length})</Link></li>
      </ul>
    </header>
  )
}

export default Header