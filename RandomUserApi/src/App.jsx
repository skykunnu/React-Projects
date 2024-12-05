import { useState } from "react"
import axios from "axios"

function App() {
  const [name,setName]=useState("");

  async function user(){
    const response=await axios.get('https://randomuser.me/api')
    console.log(response)
    // setName(response.data.results)
  }


  return (
    <>
    <button onClick={user}>ClickMe</button>
    <p>{name}</p>

    </>
  )
}

export default App