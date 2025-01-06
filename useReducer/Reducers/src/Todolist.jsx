import { useReducer } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function reducer(state, action) {
  switch (action.type) {
    case "inputTask":
      return { ...state, task: action.payload };

    case "addTask":

        if(!state.task.trim()){
            alert("Please enter the task");
            return state;
        }



        if(state.isEditing){
            return {
                ...state,
                tasks: state.tasks.map((item)=>item.id===state.idToEdit ? {...item,taskToDO:state.task} : item),
                task:"",
                isEditing:false
            }
        }
      
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), taskToDO: state.task }],
        task: "",
      };

    case "deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };

    case "editTask":
      return {
        ...state,
        isEditing: true,
        idToEdit: action.payload.id,
        task: action.payload.taskToDO,
      };
  }
}

const initState = {
  task: "",
  tasks: [],
  idToEdit: null,
  isEditing: false,
};

function Todolist() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "addTask" });
        }}
      >
        <input
          type="text"
          placeholder="Enter Task"
          value={state.task}
          onChange={(e) => {
            e.preventDefault();
            dispatch({ type: "inputTask", payload: e.target.value });
          }}
        />
        <button type="submit">
        {(state.isEditing) ? (<><MdEdit /> Edit Task</>) : (<><FaPlus /> Add Task</>)} 
        </button>
      </form>
      <ul>
        {state.tasks.map((task) => (
          <li key={task.id}>
            <span>{task.taskToDO}</span>

            <MdDelete 
              onClick={() => dispatch({ type: "deleteTask", payload: task.id })}
            />
            <MdEdit
              onClick={() => dispatch({ type: "editTask", payload: task })}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todolist;
