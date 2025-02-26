/* eslint-disable no-unused-vars */
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";
function App() {
  const [allMessage, setAllMessage] = useState([]);
  const [text, setText] = useState();
  const [color, setColor] = useState();
  const [undoNote, setUndoNote] = useState([]);

  function handleNote(e) {
    e.preventDefault();
    const obj = {
      id: Date.now(),
      Message: text,
      Color: color,
      date: new Date().toLocaleString(),
    };
    setAllMessage([...allMessage, obj]);
    setText("");
    setColor("");
  }

  function handleDeleteNote(id) {
    const deletedNote = allMessage.find((item) => item.id === id);
    if (deletedNote) {
      setUndoNote([...undoNote, deletedNote]); 
      setAllMessage(allMessage.filter((item) => item.id !== id));
    }
    
  }
  

  function undoMessage() {
      if (undoNote.length > 0) {
      const lastDeletedNote = undoNote.pop(); 
      setAllMessage([...allMessage, lastDeletedNote]); 
      setUndoNote([...undoNote]); 
    }
  }

  return (
    <div className="mainDiv">
      <div className="noteDiv1">
        <form onSubmit={handleNote}>
          <textarea
            name="task"
            className="taskArea"
            placeholder="Enter your message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <div className='paletteDiv'>
          <input
            type="color"
            className="colorPalette"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Add Note
          </button>
          </div>
        </form>
      </div>

      <div className="noteDiv2">
        <button className="undoBtn" onClick={undoMessage}>
          Undo
        </button>
        {allMessage.map((item) => {
          return (
            <div
              key={item.id}
              style={{ backgroundColor: item.Color }}
              className="note"
            >
              <div onClick={() => handleDeleteNote(item.id)}>
                <span className='cross'><TiDeleteOutline /></span>
              </div>
              <div className="message">
                {item.Message}
              </div>

              <div>
                <p className="date">{item.date}</p>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
