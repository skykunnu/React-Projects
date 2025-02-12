
import {useState} from 'react';
function App() {

  const [message, setMessage]=useState('');
  const [color,]
  const [allMessage, setAllMessage]=useState([]);

function handleNote(e){
e.preventDefault();
const obj={id:Date.now(),Message:message};


}



  return (
    <div className='mainDiv'>
    <div className='noteDiv1'>
      <form onSubmit={handleNote}>
     <textarea name="task" className='taskArea' placeholder='Enter your message' value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
     <input type="color" className='colorPalette' value={} />
     <button className='btn' type='submit'>Add Note</button>
      </form>
    </div>
    <div className='noteDiv2'>

    </div>
    </div>
  )
}

export default App

