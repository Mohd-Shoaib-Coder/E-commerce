import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";




const Navbar=()=>{


     return(
      <>
<nav className="  xl:flex  hidden  border-2 border-gray-300 h-[80px] flex justify-between items-center   ">
       
<div className="flex items-center gap-28 ml-14">
  <div className="text-black font-extrabold text-2xl">
    <span className="pl-3 pr-1 py-1 bg-red-500 font-semibold text-white">SHOP</span>
    <span className="pl-1 text-black font-sans">KNOCK</span>
  </div>
</div>
 
<div className="flex gap-6 ">
   
        <p className="font-bold border-2 border-gray-300 rounded-md bg-gray-300 h-[40px] w-[63px] flex justify-center items-center text-lg hover:h-[42px] hover:w-[65px] transition-transform hover:scale-105 font-sans ">Home</p>
        
        <p className="font-bold  border-2 border-gray-300 rounded-md bg-gray-300 h-[40px] w-[85px] flex justify-center items-center text-lg hover:h-[42px] hover:w-[87px] transition-transform hover:scale-105 font-sans">Products</p>

        </div> 




        <input className="border-2 border-gray-300 h-[40px] w-[500px] rounded-xl ml-48 pl-3" placeholder="Search for products..."></input>
       
       <div className="flex gap-12">
        <FaShoppingCart className="h-[28px] w-[28px] text-red-600 mt-2.5  " />  

           <div className="bg-black text-white h-[47px] w-[90px] rounded-md flex justify-center items-center font-bold text-xl pb-[6px] hover:border-2 hover:border-black hover:text-black hover:bg-white  mr-14"> 
        <NavLink to="/login">Login</NavLink>
        </div>
        </div>
        </nav>







        
<nav className=" lg:flex hidden  xl:hidden border-2 border-gray-300 h-[70px] flex justify-between items-center  ">
       
<div className="flex items-center gap-28 ml-14">
  <div className="text-black font-extrabold text-2xl">
    <span className="pl-3 pr-1 py-1 bg-red-500 font-semibold text-white">SHOP</span>
    <span className="pl-1">KNOCK</span>
  </div>
</div>
 
<div className="flex gap-6 mr-[500px] ">
   
        <p className="font-bold border-2 border-gray-300 rounded-md bg-gray-300 h-[40px] w-[63px] flex justify-center items-center text-lg hover:h-[42px] hover:w-[65px] transition-transform hover:scale-105 ">Home</p>
        
        <p className="font-bold  border-2 border-gray-300 rounded-md bg-gray-300 h-[40px] w-[85px] flex justify-center items-center text-lg hover:h-[42px] hover:w-[87px] transition-transform hover:scale-105">Products</p>

        </div> 



        <div className="flex justify-center items-center gap-5">
   <div>
    <IoMdSearch className="text-black text-2xl" />
    </div>



<div>
<IoMdMenu className="!h-[30px] !w-[30px]" />

</div>
</div>
       
       
        </nav>










<nav className=" lg:hidden border-2 border-gray-300 h-[70px] w-full flex justify-between items-center" >
    
<div className="flex items-center ml-7 ">
 <div className="text-black font-bold">
    <span className="pl-3 pr-1 py-1 bg-red-500 font-semibold text-white">SHOP</span>
    <span className="pl-1">KNOCK</span>
       </div>
</div>


<div className="flex justify-center items-center gap-5 mr-7">
   <div>
    <IoMdSearch className="text-black text-2xl" />
    </div>



<div>
<IoMdMenu className="!h-[30px] !w-[30px] " />

</div>
</div>

</nav>


</>

    )
}


export default Navbar;