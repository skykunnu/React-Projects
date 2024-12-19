import { useState } from "react";
import "./Avatar.css"
import { RxCrossCircled } from "react-icons/rx";




function App() {
const [showCreate,setShowCreate]=useState(false); // it is for creating create avatar div. 
const [avatarName, setAvatarName]=useState(""); // it is for storing names of avatar.
const [avatars,setAvatars]=useState([]); // it is for storing each avatar inside the array of it. 
const [showDelete,setShowDelete]=useState(false); // it is for creating delete avatar div. 
const [selectedAvatarId, setSelectedAvatarId]=useState(null);

function addAvatar(){
  const Obj={};
  Obj.id=Date.now()
  Obj.name=avatarName.slice(0,1).toUpperCase();
  setAvatars((prev)=>{
    return  [...prev,Obj]})
    setShowCreate((prev)=>!prev)
    setAvatarName("")
}

function handleAvatar(){
  setAvatars((prev)=>prev.filter((avatar)=>avatar.id!==selectedAvatarId));
  setShowDelete((prev)=>!prev)
  setSelectedAvatarId(null)

}



  return (
    <div className="avatar-wrapper">
      <h2>User Avatar</h2>

{/* Below Div(className=showCreate) is representing the create avatar from where we will add avatars*/}

<div className={showCreate ? "create":"popup create"}>
<h3>Create Avatar</h3>
<input type="text"
placeholder="Enter your name"
// below we have used avatarName as an assignment to value of input, which we created as a state initially having empty string to it. 
value={avatarName}
// below we have used setAvatarName on onChange because it will take value from value attribute above it. here e.target.value is targeting to value above. 
onChange={(e)=>setAvatarName(e.target.value)}
/>


<div className="btns">
  <button
  /* on clicking cancel button 3 things are happening
  1. setAvatarName is set to empty. 
  2. setShowCreate state is called with prev value which was true initially due to click on add button first time. by clicking on cancel it will again become false to hide create avatar div.
  3. setShowDelete state is called with prev value which was false initially then on clicking cancel btn down there it becomes true enabling delete avatar to appear.  
  */ 
  onClick={()=>{
    setAvatarName("");
    setShowCreate((prev)=>!prev)
  }}
  >Cancel</button>
  {/* As we click on create button addAvatar function is called in which an object is created having id & name as keys and all these is being pushed into setAvatars state. and inside this function we have change the state of setShowCreate to false to hide it.  */}
<button onClick={addAvatar}>Create</button>
</div>
</div>
{/* Below is the div of delete avatar is opened when clicked in cancel btn of create avatar to take validation. */}
<div className={showDelete ? "create" : "popup delete"}>
<h3>Delete Avatar</h3>
<div className="btns">
  <p>Are you sure you want to delete ?</p>
<button onClick={()=>{
  setShowDelete((prev)=>!prev)
  setSelectedAvatarId(null)
  }}>
  Cancel
</button>
<button onClick={()=>handleAvatar()}>Confirm</button>
</div>
</div>
      <div className="avatars">
       
    <div className="right">
      {/*  */}
      <button onClick={()=>setShowCreate((prev)=>!prev)}>+</button>
    </div>

    <div className="left">
      {/* Below is the logic of creating avatar div by mapping each avatars by giving them span key and its name.*/}
      {
        avatars.length>0 && avatars.map((avatar)=>{
          return (
        <span className="avatar" key={avatar.id} >{avatar.name} <RxCrossCircled className="deleteIcon" onClick={()=>{
          setShowDelete((prev)=>!prev) 
          setSelectedAvatarId(avatar.id)}} /></span>
        
        


          )})

      }
    </div>
      </div>

    </div>
  )
}

export default App