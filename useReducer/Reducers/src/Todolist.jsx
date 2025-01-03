import { useReducer } from "react"


function reducer(state,action){
    switch(action.type){
        case "inputTask":
    return {...state, task:action.payload};
   
    case "addTask":
        return {...state,tasks:[...state.tasks,{id:Date.now(),taskToDO:state.task}]}


}
}


const initState={
    task:"",
    tasks:[],
}


function Todolist() {
    const [state,dispatch]=useReducer(reducer,initState);

  return (
    <>
    <form action="" onSubmit={(e)=>{e.preventDefault(); dispatch({type:"addTask"}) }}>
<input type="text" placeholder="Enter Task" value={state.task} onChange={(e)=>{e.preventDefault(); dispatch({type:"inputTask", payload:e.target.value})}} />
<button type="submit">Add Task</button>

    </form>
    <ul>
        {state.tasks.map((task)=>(<li key={task.id}>{task.taskToDO}</li>))}
    </ul>
    </>
  )
}

export default Todolist        
