//b5d71c1c43993a8847df5ed37cabf130
import axios from "axios";
import { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  async function handleClick() {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=b5d71c1c43993a8847df5ed37cabf130&query='+ value);
    setData(response.data.results)
  }

  return (
    <>
      <input type="text" placeholder="Enter Movie Name" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={handleClick}>Click Me</button>
      <ul>
        {data.map((item)=>(

          <li key={item.id}>{item.title}<p>{item.overview}</p></li>

          
        ))}
      </ul>
    </>
  );
}

export default App;
