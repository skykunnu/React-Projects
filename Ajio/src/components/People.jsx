import menfull from "../assets/menfull.jpg"
import men1 from "../assets/men1.jpg"
import men2 from "../assets/men2.jpg"
import men3 from "../assets/men3.jpg"
import men4 from "../assets/men4.jpg"
import men5 from "../assets/men5.jpg"
import men6 from "../assets/men6.jpg"
import womenfull from "../assets/womenfull.jpg"
import women1 from "../assets/women1.jpg"
import women2 from "../assets/women2.jpg"
import women3 from "../assets/women3.jpg"
import women4 from "../assets/women4.jpg"
import women5 from "../assets/women5.jpg"
import women6 from "../assets/women6.jpg"
function People() {
  return (
    <>
    <div className="people flex justify-center gap-4 mt-10 w-[80%] mx-auto ">
        <div className="men w-1/2">
          <div className="full">
            <img src={menfull} alt="" />
          </div>
          <div className="other flex justify-center flex-wrap gap-6 my-5">
            <img className='h-[20rem] w-[15rem]' src={men1} alt="" />
            <img className='h-[20rem] w-[15rem]' src={men2} alt="" />
            <img className='h-[20rem] w-[15rem]' src={men3} alt="" />
            <img className='h-[20rem] w-[15rem]' src={men4} alt="" />
            <img className='h-[20rem] w-[15rem]' src={men5} alt="" />
            <img className='h-[20rem] w-[15rem]' src={men6} alt="" />
          </div>
        </div>

        <div className="women w-1/2">
        <div className="full">
            <img src={womenfull} alt="" />
          </div>
          <div className="other flex justify-center flex-wrap gap-6 my-5">
            <img className='h-[20rem] w-[15rem]' src={women1} alt="" />
            <img className='h-[20rem] w-[15rem]' src={women2} alt="" />
            <img className='h-[20rem] w-[15rem]' src={women3} alt="" />
            <img className='h-[20rem] w-[15rem]' src={women4} alt="" />
            <img className='h-[20rem] w-[15rem]' src={women5} alt="" />
            <img className='h-[20rem] w-[15rem]' src={women6} alt="" />
          </div>
        </div>

        
    </div>
    </>
  )
}

export default People