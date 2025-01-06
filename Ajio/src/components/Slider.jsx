import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/Azorte_LP_Desktop_Banner_05.avif' 
import img2 from '../assets/Azorte_LP_Hero-banner_web_women.avif' 
import img3 from '../assets/GFS jan web.jpg' 
import img4 from '../assets/web-couple-7th Nov.avif' 
import img5 from '../assets/web-men-23rdoct.avif'
import img6 from '../assets/Kids Banner - web.avif' 


function Slider() {
  return (
    <Carousel className="mt-[12rem]" autoPlay={true} infiniteLoop={true} showArrows={false} showThumbs={false} transitionTime="500ms" showStatus={false}>
    <div>
        <img src={img1} alt="" />
    </div>
    <div>
        <img src={img2} alt="" />
    </div>
    <div>
        <img src={img3} alt="" />
    </div>
    
    <div>
        <img src={img4} alt="" />
    </div>
    <div>
        <img src={img5} alt="" />
    </div>
    <div>
        <img src={img6} alt="" />
    </div>

    
    </Carousel>
  )
}

export default Slider