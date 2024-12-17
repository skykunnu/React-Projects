import { Link } from "react-router-dom"
function Login() {
  return (
    <>
    <form action="">
        <input type="text" name="name" placeholder="Name" /><br />
        <input type="password" name="password" placeholder="password" /><br />
        <button type="submit">Login</button>
    </form>
    <Link to="/register">New user ?Register</Link>
    </>
  )
}

export default Login