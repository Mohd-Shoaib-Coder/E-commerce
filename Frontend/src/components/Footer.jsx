import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer=()=>{


    return (
<>

        <div>







 
<div className=" hidden sm:flex  h-64 w-full bg-[#c5e9ff] flex justify-between relative overflow-hidden">


        <div className="h-44 w-48 bg-blue-300 absolute z-10 top-3 -left-24 -rotate-45 flex justify-center items-center">
          <div className="h-24 w-24 bg-[#c5e9ff]"></div>
        </div>


<div className="w-full bg-amber-300 flex items-center justify-center">



<div className="mt-14">

<img className="h-[280px]" src="https://freepngimg.com/thumb/model/4-2-model-free-png-image.png" alt="model"/>

</div>





  <div className="">

    <div className="flex font-bold text-2xl">
    <h3>GET </h3>
    <span className="text-red-500 ml-1 mr-1"> 20%</span>
   <h3 >off Discount Coupon</h3>
    
   </div>


    <p className="font-semibold">by Subscribing our Newsletter</p>
    
  


   <div className="flex text-xl mt-5">

    <input className="bg-white p-1 text-base w-[240px] pl-3.5" type="email"  placeholder="Email Address" ></input>
    <p className="text-white bg-black text-lg px-3 py-1.5">Subscribe</p>
    </div>
     
  </div>

    </div>


</div> 
  



















<div className=" sm:hidden  h-[500px] w-full bg-[#c5e9ff] flex justify-between relative overflow-hidden ">


         <div className="h-96 w-96 bg-blue-300 absolute z-10 top-3 -left-80 -rotate-45 flex justify-center items-center">
          <div className="h-72 w-72 bg-[#c5e9ff]">

          </div>
        </div>


<div className="w-full bg-amber-300 flex justify-center  ">


<div className="">
<div className="mt-14 flex justify-center mb-4">

<img className="h-[280px]" src="https://freepngimg.com/thumb/model/4-2-model-free-png-image.png" alt="model"/>

</div>


  <div className="">

    <div className="flex font-bold text-base">
    <h3>GET </h3>
    <span className="text-red-500 ml-1 mr-1"> 20%</span>
   <h3 >off Discount Coupon</h3>
    
   </div>


    <p className="font-semibold">by Subscribing our Newsletter</p>
    
  


   <div className="flex text-base mt-5">

    <input className="bg-white p-1 text-base w-[150px] pl-3.5" type="email"  placeholder="Email Address" ></input>
    <p className="text-white bg-black text-base px-3 py-1.5">Subscribe</p>
    </div>
     
  </div>

    </div>
    </div>

</div> 
  















































 <div className="sm:flex sm:justify-evenly sm:flex-row sm:mt-10 sm:mb-5  flex flex-col justify-center items-center bg-teal-500 sm:bg-white"> 




<div className=" w-[180px] h-[160px] pt-4">

    <h3 className="text-xl font-medium ">About Us</h3>
    <p className="mt-1 sm:text-gray-600 text-white">We are  passionate <br/> about bringing you the<br/> latest trends, top-quality<br/> products. </p>

</div>


<div className=" w-[180px]">

    <h3 className="text-xl font-medium mt-5 sm:mt-0">Features</h3>
    <p className="mt-5 sm:text-gray-600 text-white">About Us</p>
    <p className="sm:text-gray-600 text-white">Terms & Conditions</p>
    <p className="sm:text-gray-600 text-white">Best Products</p>
</div>

<div className=" w-[180px]">

    <h3 className="text-xl font-medium mt-5 sm:mt-0">General Links</h3>
    <p className="mt-5 sm:text-gray-600 text-white">Blog</p>
    <p className="sm:text-gray-600 text-white">Tracking Order</p>
    <p className="sm:text-gray-600 text-white">Become Seller</p>
</div>


<div className=" w-[180px]">

<h3 className="text-xl font-medium mt-5 sm:mt-0">Helpful</h3>

<p className="mt-5 sm:text-gray-600 text-white">Flash Sale</p>
<p className="sm:text-gray-600 text-white">FAQ</p>
<p className="sm:text-gray-600 text-white mb-4 sm:mb-0">Support</p>

</div>

</div>

<div className="hidden sm:visible">
<hr class="border-t-[2px] border-gray-300 w-3/4 mx-auto my-4 mt-24" />

</div>





        </div>




<div className="bg-gray-900 text-gray-400 py-4 text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo and Name */}
        <div className="mb-2 md:mb-0">
          <h2 className="text-white text-lg font-semibold">ShopKnock</h2>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-3 mt-3 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={16} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-xs mt-2">
        © {new Date().getFullYear()} ShopKnock. All Rights Reserved.
      </p>
    </div>









</>
        
    )
}

export default Footer;