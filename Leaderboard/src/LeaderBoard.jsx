import { useState } from "react"


function LeaderBoard() {
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [country,setCountry]=useState("")
    const [score,setScore]=useState("")
    const [leaderBoard,setLeaderBoard]=useState([])

    function handleSubmit(e){
        e.preventDefault();
        const player={
            id: Date.now(),
            Name: fname +" "+ lname,
            Country: country,
            Score: score 
        };
        
        
        
        
        setLeaderBoard([...leaderBoard , player].sort((a,b)=>b.Score-a.Score));
        setFname("")
        setLname("")
        setCountry("")
        setScore("")


    }
function IncrementFive(id){
setLeaderBoard(leaderBoard.map((obj)=>obj.id===id?{...obj, Score:Number(obj.Score)+5}:obj).sort((a,b)=>b.Score-a.Score));
}

function DecrementFive(id){
    setLeaderBoard(leaderBoard.map((obj)=>obj.id===id?{...obj, Score:Number(obj.Score)-5}:obj).sort((a,b)=>b.Score-a.Score));
}

function DeleteItem(id){
    setLeaderBoard(leaderBoard.filter((obj)=>obj.id!=id));
}


  return (
    <>
    <form action="" onSubmit={handleSubmit}>
    <input type="text" placeholder="First Name" value={fname} onChange={(e)=>setFname(e.target.value)} />
    <input type="text" placeholder="Last Name" value={lname} onChange={(e)=>setLname(e.target.value)} />    

 <select name="country" id="" value={country} onChange={(e)=>setCountry(e.target.value)} >
    <option value="Select Country">Select Country</option>
<option value="India">India</option>    
<option value="Australia">Australia</option>    
<option value="WestIndies">WestIndies</option>    
<option value="New Zealand">New Zealand</option>    
</select>   


<input type="number" placeholder="Score" value={score} onChange={(e)=>setScore(e.target.value)} />

<button>Submit</button>
    </form>
    
    <div className="result">
       {leaderBoard ? leaderBoard.map((obj)=>
        <p key={obj.id}>
            <span>{obj.Name}</span>
            <span>{obj.Country}</span>
            <span>{obj.Score}</span>
            <span>
                <button onClick={()=>IncrementFive(obj.id)}>+5</button>
                <button onClick={()=>DecrementFive(obj.id)}>-5</button>
                <button onClick={()=>DeleteItem(obj.id)}>Delete</button>
            </span>
        </p>
    ) :""}
    </div>
    
    </>
  )
}

export default LeaderBoard