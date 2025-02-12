import { TiDeleteOutline } from "react-icons/ti";
import {useState} from 'react';
function App() {

  const [allMessage, setAllMessage]=useState([]);
  const [text, setText]=useState();
  const [color,setColor]=useState();



function handleNote(e){
e.preventDefault();
const obj={id:Date.now(),Message:text, Color:color};
setAllMessage([...allMessage,obj]);
setText('');
setColor('');


}

function handleDeleteNote(id){
  setAllMessage(allMessage.filter((item)=>item.id!==id));

}



  return (
    <div className='mainDiv'>
    <div className='noteDiv1'>
      <form onSubmit={handleNote}>
     <textarea name="task" className='taskArea' placeholder='Enter your message' value={text} onChange={(e)=>setText(e.target.value)} required></textarea>
     <input type="color" className='colorPalette' value={color} onChange={(e)=>setColor(e.target.value)} />
     <button className='btn' type='submit'>Add Note</button>
      </form>
    </div>
    <div className='noteDiv2'>
     {allMessage.map((item)=>{
      return(
        <div key={item.id} style={{backgroundColor:item.Color}} className='note'>
          <span className='cross' onClick={()=>handleDeleteNote(item.id)}><TiDeleteOutline /></span>
          {item.Message}
        </div>
      )
     })}
    </div>
    </div>
  )
}

export default App

