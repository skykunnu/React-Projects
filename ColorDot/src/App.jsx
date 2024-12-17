import { useState } from 'react'
import {COLORS} from './assets/colors'
import "./Circle.css"
function App() {
const [circles,setCircles]=useState([]);
const [deleteCircle,setDeleteCircle]=useState([]);

function createCircle(e){
const circle={}
circle.x=e.clientX;
circle.y=e.clientY;
circle.id=Date.now();
circle.backgroundColor=COLORS[Math.floor(Math.random()*COLORS.length)];
setCircles((prevValue)=>{
  return [...prevValue,circle]
})
}

function handlePropagation(e){
e.stopPropagation();
}

function handleReset(){
  setCircles((prevValue)=>[]);
}

function handleUndo(){
const temp=circles;
const LastCreatedCircle=temp.pop();
setDeleteCircle((prev)=>[...prev,LastCreatedCircle])
}

function handleRedo(){
  const temp=deleteCircle;
  const createCircle=temp.pop();
  setCircles((prev)=>[...prev,createCircle])
}

  return (
    <div className='screen' onClick={createCircle} >
  <div className='buttons' onClick={handlePropagation}>
<button className={circles.length>0 ? "":"disabled"} onClick={handleReset}>Reset</button>
<button className={circles.length>0 ? "":"disabled"} onClick={handleUndo}>Undo</button>
<button className={deleteCircle.length>0 ? "":"disabled"} onClick={handleRedo}>Redo</button>
  {
    circles.length>0 && circles.map((circle)=>(
      <div className='singleDot' key={circle.id} style={{top:circle.y-7.5+"px",left:circle.x-7.5+"px",backgroundColor:circle.backgroundColor}}>

      </div>
    ))
  }
  
  
  
  
  </div>    
    </div>
  )
}

export default App