import { FaRegHeart } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";






function Navbar() {
  return (
    <>
    <div className="fixed left-0 right-0 top-0 z-10 bg-white">
    <div className="shadow-xl">
    <div className="h-20 flex align-baseline justify-between mx-28">
      <div className="h-20 leftNav text-6xl text-[#2f4254] font-semibold">AJIO</div>
      <div className="h-20 rigthNav">
        <div>
            <ul className="flex items-center justify-end">
                <li className="text-gray-600  text-xs px-2 "><a href="">Sign In/ Join AJIO</a></li>
                <li className="text-gray-600 text-xs px-2"><a href="">Customer Care</a></li>
                <li className="text-white  px-3 py-1 bg-slate-700 text-xs"><a href="">Visit AJIO</a></li>
                <li className="px-2 py-1 ml-2  text-white text-xs bg-black"><a href="">Visit AJIOLUXE</a></li>
            </ul>
        </div>
        <div className="my-3">
            <ul className="flex items-center gap-4">
                <li className="text-xs text-gray-500"><a href="">AZORTE</a></li>
                <span className="flex items-center gap-1 relative">
                <input type="text" placeholder="Search Azorte store" className="border w-52 pl-2 py-1 placeholder:text-gray-500 text-sm" />
                <FaMagnifyingGlass className="text-gray-400 absolute right-2" />
                </span>
                <FaRegHeart className="bg-slate-950 rounded-full text-white h-8 w-8 px-2 py-2" />
                <IoBagHandleOutline className="bg-slate-950 rounded-full text-white h-8 w-8 px-2 py-2" />
            </ul>
        </div>
      </div>
    </div>
    </div>
    
    <div className="azorte text-center ">
      
        <h1 className="text-4xl font-bold text-[#678889] py-4">AZoRTE</h1>
            <ul className="flex items-center gap-4 justify-center text-gray-400 text-md">
                <li><a href="">MEN</a></li>
                <li><a href="">WOMEN</a></li>
                <li><a href="">KIDS</a></li>
                <li><a href="">BRANDS</a></li>
            </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar