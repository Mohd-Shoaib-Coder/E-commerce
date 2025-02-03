import React from "react";
import { FaShoppingCart } from "react-icons/fa";


const Navbar=()=>{


    return(
<div className=" border-2 border-black h-[65px] flex justify-between items-center ">
       
<div className="flex items-center gap-28">
  <div className="text-black font-extrabold text-2xl">
    <span className="pl-3 pr-1 py-1 bg-red-500 font-semibold text-white">SHOP</span>
    <span className="pl-1">KNOCK</span>
  </div>
</div>
            

<div className="flex gap-5 ">
    
        <p className="font-bold border-2 border-gray-300 rounded-md bg-gray-300 h-[40px] w-[63px] flex justify-center items-center text-lg ">Home</p>
        
        <p className="font-bold  border-2 border-gray-300 rounded-md bg-gray-300 h-[40px] w-[85px] flex justify-center items-center text-lg ">Products</p>

        </div>
        <input className="border-2 border-gray-400 h-[40px] w-[320px] rounded-xl " placeholder="Find something"></input>
        <div className="
        "><FaShoppingCart /></div>
        <button>Login</button>

        </div>
    )
}


export default Navbar;