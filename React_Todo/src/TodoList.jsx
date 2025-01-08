import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [Tasks, setTask] = useState([]);

  function addTask() {
    const obj = { id: Date.now(), task: input };
    setTask([...Tasks, obj]);
    setInput("");
  }

  function Delete(id) {
    setTask(Tasks.filter((obj) => obj.id !== id));
  }

  // function edit(task){

  // }

  return (
    <>
      <input
        type="text"
        placeholder="Enter the task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {Tasks.map((item) => {
          return (
            <li key={item.id}>
              {item.task}
              <button onClick={() => Delete(item.id)}>Delete</button>
              <button>Edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
