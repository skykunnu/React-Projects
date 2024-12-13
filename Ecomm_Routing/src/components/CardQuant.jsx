import { ecomcontext } from "../App";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";


function CardQuant({id}) {
    const {handleRemoveFromCart}=useContext(ecomcontext)
     const [count,setCount]=useState(1)
    
      function increment(){
        setCount(count+1);
      }
    
      function decrement(){
        if(count>1){
          setCount(count-1);
    
        }
      }
  return (
    <div className="Icons"><IoIosAddCircleOutline className="addIcon" onClick={increment} /><button>{count}</button><FiMinusCircle className="subIcon" onClick={decrement} /> <span><MdDelete onClick={()=>handleRemoveFromCart(id)} className="DelIcon" />
</span></div>
    
  )
}

export default CardQuant