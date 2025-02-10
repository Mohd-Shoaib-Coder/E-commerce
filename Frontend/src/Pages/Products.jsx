import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Products=()=>{




    return (

<>
<Navbar/>
<section className="p-6 bg-gray-200 flex">

    {/* filter products  */}



<div className="h-[calc(100vh-80px)] w-1/5 bg-white p-4">

<div className=" ">

    <div className="flex justify-center">

    <div className="bg-red-500 text-white text-2xl flex justify-center p-1 font-bold w-9/10">Filter Products</div>

    </div>

    <div className="ml-4 mt-6 text-lg font-semibold ">

<div className="flex gap-2 flex-start  ">

<p>Price Increase</p>
<input type="checkbox" />
</div>


<div className="flex gap-2 flex-start mt-2 ">

<p>Price Decrease</p>
<input type="checkbox" />
</div>




<div className="flex gap-2 flex-start mt-2 ">

<p>Sort A to Z </p>
<input type="checkbox" />
</div>



<div className="flex gap-2 flex-start mt-2 ">

<p>Men</p>
<input type="checkbox" />
</div>



<div className="flex gap-2 flex-start mt-2 ">

<p>Women</p>
<input type="checkbox" />
</div>


    </div>



</div>

</div>

{/* proudcts image */}

<div className="flex flex-wrap flex-col w-full  pl-3 bg-gray-200 ">

<div className="flex flex-wrap justify-evenly">

<div className="h-[400px] w-[300px]  p-2 flex flex-col items-center rounded-2xl mb-6 bg-white">
  <div className="h-[250px] w-full overflow-hidden ">
    <img
      src="https://imgs.search.brave.com/aWAhnmJLbypl2TPfr3FFzJlWNh9oaof6-5ojE9seOe8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzU3/ODg5L3BleGVscy1w/aG90by03NTc4ODku/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw"
      alt="product"
      className="w-full h-full object-cover"
    />
  </div>
  <p className="mt-3 font-bold text-lg">Mens casual wear</p>
  <p className="text-red-500 font-bold  text-lg">Price $100</p>
  <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded font-extrabold text-xl w-9/10 hover:bg-blue-600">Add to Cart</button>
</div>



<div className="h-[400px] w-[300px]  p-2 flex flex-col items-center rounded-2xl ml-2 bg-white">
  <div className="h-[250px] w-full overflow-hidden ">
    <img
      src="https://imgs.search.brave.com/aWAhnmJLbypl2TPfr3FFzJlWNh9oaof6-5ojE9seOe8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzU3/ODg5L3BleGVscy1w/aG90by03NTc4ODku/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw"
      alt="product"
      className="w-full h-full object-cover"
    />
  </div>
  <p className="mt-3 font-bold text-lg">Mens casual wear</p>
  <p className="text-red-500 font-bold  text-lg">Price $100</p>
  <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded font-extrabold text-xl w-9/10 hover:bg-blue-600">Add to Cart</button>
</div>







<div className="h-[400px] w-[300px]  p-2 flex flex-col items-center rounded-2xl ml-2 bg-white">
  <div className="h-[250px] w-full overflow-hidden ">
    <img
      src="https://imgs.search.brave.com/aWAhnmJLbypl2TPfr3FFzJlWNh9oaof6-5ojE9seOe8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzU3/ODg5L3BleGVscy1w/aG90by03NTc4ODku/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw"
      alt="product"
      className="w-full h-full object-cover"
    />
  </div>
  <p className="mt-3 font-bold text-lg">Mens casual wear</p>
  <p className="text-red-500 font-bold  text-lg">Price $100</p>
  <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded font-extrabold text-xl w-9/10 hover:bg-blue-600">Add to Cart</button>
</div>


<div className="h-[400px] w-[300px]  p-2 flex flex-col items-center rounded-2xl ml-2 bg-white">
  <div className="h-[250px] w-full overflow-hidden ">
    <img
      src="https://imgs.search.brave.com/aWAhnmJLbypl2TPfr3FFzJlWNh9oaof6-5ojE9seOe8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzU3/ODg5L3BleGVscy1w/aG90by03NTc4ODku/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw"
      alt="product"
      className="w-full h-full object-cover"
    />
  </div>
  <p className="mt-3 font-bold text-lg">Mens casual wear</p>
  <p className="text-red-500 font-bold  text-lg">Price $100</p>
  <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded font-extrabold text-xl w-9/10 hover:bg-blue-600">Add to Cart</button>
</div>


<div className="h-[400px] w-[300px]  p-2 flex flex-col items-center rounded-2xl ml-2 bg-white">
  <div className="h-[250px] w-full overflow-hidden ">
    <img
      src="https://imgs.search.brave.com/aWAhnmJLbypl2TPfr3FFzJlWNh9oaof6-5ojE9seOe8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzU3/ODg5L3BleGVscy1w/aG90by03NTc4ODku/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw"
      alt="product"
      className="w-full h-full object-cover"
    />
  </div>
  <p className="mt-3 font-bold text-lg">Mens casual wear</p>
  <p className="text-red-500 font-bold  text-lg">Price $100</p>
  <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded font-extrabold text-xl w-9/10 hover:bg-blue-600">Add to Cart</button>
</div>


<div className="h-[400px] w-[300px]  p-2 flex flex-col items-center rounded-2xl ml-2 bg-white">
  <div className="h-[250px] w-full overflow-hidden ">
    <img
      src="https://imgs.search.brave.com/aWAhnmJLbypl2TPfr3FFzJlWNh9oaof6-5ojE9seOe8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzU3/ODg5L3BleGVscy1w/aG90by03NTc4ODku/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw"
      alt="product"
      className="w-full h-full object-cover"
    />
  </div>
  <p className="mt-3 font-bold text-lg">Mens casual wear</p>
  <p className="text-red-500 font-bold  text-lg">Price $100</p>
  <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded font-extrabold text-xl w-9/10 hover:bg-blue-600">Add to Cart</button>
</div>














</div>

 
{/* Roller of images */}

<div className="flex gap-4 justify-center mt-10 mb-5 bg-gray-200">

<button className="bg-black text-white p-2 rounded-xl">Prev</button>

<p className="bg-black text-white p-2 rounded-xl w-[40px] flex justify-center">1</p>

<button className="bg-black text-white p-2 rounded-xl">Next</button>

</div>



</div>







</section>










<Footer/>



</>



    )
}

export default Products;