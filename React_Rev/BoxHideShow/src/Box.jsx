/* eslint-disable react/prop-types */
import { FaCaretUp } from "react-icons/fa";
import { useState } from "react";


function Box(props) {
    const [showContent,setShowContent]=useState(true);

    function toggleContent(){
        setShowContent(!showContent)
    }
  return (
    <div className="box">
                <h2>{props.heading}  <FaCaretUp onClick={toggleContent} style={showContent ? {rotate:"180deg"}: {rotate:"0deg"} }/>
                </h2>
                <div className="content" style={showContent ? {display:"block"} : {display:"none"}}>
                    <img src={props.photo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo dolorum quia illum quidem possimus voluptatibus dolores at, omnis quis reprehenderit voluptas earum delectus eligendi praesentium asperiores quas reiciendis autem!</p>
                </div>
            </div>
  )
}

export default Box