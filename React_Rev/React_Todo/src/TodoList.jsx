import { useState } from 'react'

function TodoList() {
  const [input,setInput]=useState("")
  const [Tasks,setTask]=useState([])

function addTask(){
  const obj={id:Date.now(),task:input}
  setTask([...Tasks,obj])
  setInput("")
}

function Delete(id){
setTask(Tasks.filter((obj)=>obj.id!==id))
}

// function edit(task){

// }

  return (
    <>
    <input type="text" placeholder='Enter the task'
     value={input}
     onChange={(e)=>setInput(e.target.value)}
    />
    <button onClick={addTask}>Add Task</button>
  <ul>
    {Tasks.map((obj)=>{
      return <li key={obj.id}>{obj.task}
      <button onClick={()=>Delete(obj.id)}>Delete</button>
      <button>Edit</button>
      
      </li>
    })}
    </ul>    
    </>
  )
}

export default TodoList