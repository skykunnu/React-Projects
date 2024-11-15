/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";


function AccordBox(props) {
    const[ShowContent,setShowContent]=useState(true);

function toggleContent(){
    setShowContent(!ShowContent)
}


  return (
    
        <div className="accord">
          <h1>{props.heading}<i className="fa-solid fa-square-minus"></i><FaCaretDown onClick={toggleContent} style={ShowContent ? {rotate :"180deg"} : {rotate:"0deg"}} /></h1>
          <p className="active" style={ShowContent ? {display:"block"} : {display:"none"}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
            sapiente voluptas saepe. Temporibus esse totam hic quam, facere,
            perspiciatis dignissimos quae ducimus quis, quo eum. Ipsam sint eos
            laborum.
          </p>
    </div>
  )
}

export default AccordBox