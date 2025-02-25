/* eslint-disable no-unused-vars */
import { TiDeleteOutline } from "react-icons/ti";
import {useState} from 'react';
function App() {

  const [allMessage, setAllMessage]=useState([]);
  const [text, setText]=useState();
  const [color,setColor]=useState();
  const [undoNote, setUndoNote]=useState([]);
  



function handleNote(e){
e.preventDefault();
const obj={id:Date.now(),Message:text, Color:color, date:new Date().toLocaleString()};
setAllMessage([...allMessage,obj]);
setText('');
setColor('');

}

function handleDeleteNote(id){
  setAllMessage(allMessage.filter((item)=>item.id!==id));

}


function undoMessage(){
  const note=allMessage;
  const lastCreated=note.pop();
  setUndoNote((prev)=>[...prev, lastCreated]);

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
      <button className='undoBtn' onClick={undoMessage}>Undo</button>
     {allMessage.map((item)=>{
      return(
        
        <div key={item.id} style={{backgroundColor:item.Color}} className='note'>
          <span className='cross' onClick={()=>handleDeleteNote(item.id)}><TiDeleteOutline /></span>
          <span className='message'>
          {item.Message}
          </span>

          <div className="date">
          {item.date}
          </div>

        </div>
      )
     })}
    </div>
    </div>
  )
}

export default App

