import {Link, useNavigate} from "react-router-dom"
import { useEcom } from "../context/Ecom"
import { useAuth } from "../context/Auth";


function Header() {
  const {cart}=useEcom();
// const {isAuthenticated,logout}=useContext(authContext)
const {isAuthenticated,logout}=useAuth();
const navigate=useNavigate();



  return (
    <header>
      <h1><Link to="/" className="heading">Myntra</Link></h1>
      <ul>

        {isAuthenticated ?
        <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Cart">Cart({cart.length})</Link></li>
        <li><button onClick={()=>{
          logout();
          navigate("/login")
        }} className="logoutbtn">Logout</button></li>
        </>
        :
        <>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        </>
      
      }
        
      </ul>
    </header>
  )
}

export default Header