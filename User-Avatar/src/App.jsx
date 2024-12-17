import { useState } from "react";
import "./Avatar.css"
import { RxCrossCircled } from "react-icons/rx";




function App() {
const [showCreate,setShowCreate]=useState(false);
const [avatarName, setAvatarName]=useState("");
const [avatars,setAvatars]=useState([]);
const [showDelete,setShowDelete]=useState(false);

function addAvatar(){
  const Obj={};
  Obj.id=Date.now()
  Obj.name=avatarName.slice(0,1).toUpperCase();
  setAvatars((prev)=>{
    return  [...prev,Obj]})
    setShowCreate((prev)=>!prev)
    setAvatarName("")
}


function handleDelete(id){
  setAvatars((prev)=>prev.filter((avatar)=>avatar.id!==id));
}

  return (
    <div className="avatar-wrapper">
      <h2>User Avatar</h2>
<div className={showCreate ? "create":"popup create"}>
<h3>Create Avatar</h3>
<input type="text"
placeholder="Enter your name"
value={avatarName}
onChange={(e)=>setAvatarName(e.target.value)}
/>
<div className="btns">
  <button
  onClick={()=>{
    setAvatarName("");
    setShowCreate((prev)=>!prev)
    setShowDelete((prev)=>!prev)
  }}
  >Cancel</button>
<button onClick={addAvatar}>Create</button>
</div>
</div>

<div className={showDelete ? "create" : "popup delete"}>
<h3>Delete Avatar</h3>
<div className="btns">
  <p>Are you sure you want to delete ?</p>
<button onClick={()=>{
  setShowCreate((prev)=>!prev);
  setShowDelete((prev)=>!prev)}}>
  Cancel
</button>
<button onClick={()=>{setShowDelete((prev)=>!prev)}}>Confirm</button>
</div>
</div>
      <div className="avatars">
    <div className="right">
      <button onClick={()=>setShowCreate((prev)=>!prev)}>+</button>
    </div>
    <div className="left">
      {
        avatars.length>0 && avatars.map((avatar)=>{
          return (
        <span className="avatar" key={avatar.id} >{avatar.name} <RxCrossCircled className="deleteIcon" onClick={()=>handleDelete(avatar.id)} /></span>
        
        


          )})

      }
    </div>
      </div>

    </div>
  )
}

export default App