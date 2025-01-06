import newtrends2 from "../assets/newtrends2.jpg"
function Newtrend() {
  return (
    <> 
    <div className="newTrand">
    <h2 className="text-6xl text-gray-600  text-center my-6">Hot New Trends </h2>
    <div className="newTrend w-full my-4">
        <img src={newtrends2} alt="" className='w-full h-[25rem] ' />
    </div>
    </div>
    </>
  )
}

export default Newtrend