import { useState } from "react"
import Img1 from "./assets/cat1.jpeg"
import Img2 from "./assets/cat2.jpeg"
import Img3 from "./assets/cat3.jpeg"
import Img4 from "./assets/cat4.jpeg"
import Img5 from "./assets/cat5.jpeg"
import Img6 from "./assets/cat6.jpeg"
import "./card.css"

function Cards() {
    const [Img,setImg]=useState([Img1,Img2,Img3,Img4,Img5,Img6])
    const [finalArr,setfinalArr]=useState([...Img])
    const [UniArr,setUniArr]=useState([])
    

    function getRandomImg (){
       let randomIndex= Math.floor(Math.random()*finalArr.length)
       if(UniArr.includes(randomIndex) ) return getRandomImg();
        else{
            UniArr.push(randomIndex)
            return randomIndex
        }

       
    }
    
    
  return (
    <>
      <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="./public\mark.jpeg" alt="Avatar"/>
    </div>
    <div className="flip-card-back">
     <img src={finalArr[getRandomImg()]} alt="" /> 
      
    </div>
  </div>
</div> 

    </>
  )
}

export default Cards