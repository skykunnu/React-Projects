import "./boxHideShow.css";
import Box from"./Box.jsx";
import IMG1 from "./assets/Audi.jpg";
import IMG2 from "./assets/Bentley.jpg";
import IMG3 from "./assets/BMW.png";
import IMG4 from "./assets/Ferrari.jpg";

// props : are arguments passed to components. 


function BoxHideShow(){
    return(
        <div id="boxes">
           <Box heading="Box1" photo={IMG1}/>
           <Box heading="Box2" photo={IMG2}/>
           <Box heading="Box3" photo={IMG3}/>
           <Box heading="Box4" photo={IMG4}/> 
        </div>
    )
}

export default BoxHideShow