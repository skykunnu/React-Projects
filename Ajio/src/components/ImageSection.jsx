import wild from "../assets/earth.jpg"
import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"
import trand1 from "../assets/trand1.jpg"
import trand2 from "../assets/trand2.jpg"
import trand3 from "../assets/trand3.jpg"
import trand4 from "../assets/trand4.jpg"
import trand5 from "../assets/trand5.jpg"
import trand6 from "../assets/trand6.jpg"
function ImageSection() {
  return (
    <>
         <div className="imageSction mt-20">
           <img src={wild} alt="" />
         </div>
         <div className="image flex gap-[0.85rem] my-4">
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
         </div>
         <div className="new">
          <h2 className="text-6xl text-gray-600  text-center my-6"> New Season , New You</h2>
         <div className="trand flex flex-wrap justify-center gap-5">
          <img src={trand1} alt="" />
          <img src={trand2} alt="" />
          <img src={trand3} alt="" />
          <img src={trand4} alt="" />
          <img src={trand5} alt="" />
          <img src={trand6} alt="" />
         </div>

         </div>
    </>
  )
}

export default ImageSection