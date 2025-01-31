import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [Tasks, setTask] = useState([]);
  const [editingId, setEditingId] = useState(null); 


  function addTask() {
    if (editingId) {
  
      setTask(
        Tasks.map((task) =>
          task.id === editingId ? { ...task, taskToDo: input } : task
        )
      );
      setEditingId(null); 
    } else {
      
      const obj = { id: Date.now(), taskToDo: input };
      setTask([...Tasks, obj]);
    }
    setInput(""); 
  }

  function Delete(id) {
    setTask(Tasks.filter((obj) => obj.id !== id));
  }

  function edit(id) {
    const taskToEdit = Tasks.find((task) => task.id === id); // returning an object having the same id which is passed as an argument. 
    setInput(taskToEdit.task); // returned object task will set into setInput. 
    setEditingId(id); 
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter the task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>{editingId ? "Edit Task" : "Add Task"}</button>
      <ul>
        {Tasks.map((item) => {
          return (
            <li key={item.id}>
              {item.taskToDo}
              <button onClick={() => Delete(item.id)}>Delete</button>
              <button onClick={() => edit(item.id)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
