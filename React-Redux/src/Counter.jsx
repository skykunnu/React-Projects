
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from './slice';
function Counter() {
const dispatch=useDispatch();
const count=useSelector((state)=>{
    return state.counter.count;
});

  return (
    <>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <p>{count}</p>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Counter