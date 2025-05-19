import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";



const Navbar = ({ loggedIn, setLoggedIn }) => {
  const cartItems = useSelector((state) => state.cart.cart);

  const [showCard,setShowCard]=useState(false);
  const [showMenu,setShowMenu]=useState(false)


  return (
    <>
      {/* XL NAVBAR */}
      <nav className="xl:flex hidden border-2 border-gray-300 h-[80px] justify-between items-center px-6">
        <div className="flex items-center gap-28 ml-14">
          <div className="text-black font-extrabold text-2xl">
            <span className="pl-3 pr-1 py-1 bg-red-500 font-semibold text-white">SHOP</span>
            <span className="pl-1 text-black font-sans">KNOCK</span>
          </div>
        </div>

        {/* NavLinks */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold px-4 py-2 rounded-md text-lg transition-all duration-300 ${
                isActive
                  ? "bg-gray-300 text-black shadow-md"
                  : "text-gray-600 hover:bg-gray-200 hover:text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `font-semibold px-4 py-2 rounded-md text-lg transition-all duration-300 ${
                isActive
                  ? "bg-gray-300 text-black shadow-md"
                  : "text-gray-600 hover:bg-gray-200 hover:text-black"
              }`
            }
          >
            Products
          </NavLink>
        </div>

        {/* Search Bar */}
      <div className="relative w-[500px]">
  <input
    type="text"
    id="search"
    className="peer h-[50px] w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-transparent shadow-md transition-all duration-300 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:shadow-lg focus:scale-[1.01]"
    placeholder="Search for products..."
  />
  <label
    htmlFor="search"
    className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all duration-200 
    peer-placeholder-shown:top-[12px] 
    peer-placeholder-shown:text-base 
    peer-placeholder-shown:text-gray-400 
    peer-focus:top-2 
    peer-focus:text-sm 
    peer-focus:text-gray-500 
    peer-focus:opacity-0"
  >
    Search for products...
  </label>
</div>




        {/* Cart + Auth Buttons */}
        <div className="flex items-center gap-10">
          <NavLink to="/cart" className="relative flex items-center">
            <FaShoppingCart className="h-[28px] w-[28px] text-red-600 hover:text-red-800 transition duration-300" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                {cartItems.length}
              </span>
            )}
          </NavLink>

          <div className="bg-black text-white h-[45px] w-[90px] rounded-md flex justify-center items-center font-semibold text-lg hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300 mr-6">
            {loggedIn ? <button>Logout</button> : <NavLink to="/login">Login</NavLink>}
          </div>
        </div>
      </nav>

      {/* LG NAVBAR */}
      <nav className="lg:flex hidden xl:hidden border-2 border-gray-300 h-[70px] justify-between items-center px-6">
        <div className="flex items-center gap-28 ml-14">
          <div className="text-black font-extrabold text-2xl">
            <span className="pl-3 pr-1 py-1 bg-red-500 font-semibold text-white">SHOP</span>
            <span className="pl-1">KNOCK</span>
          </div>
        </div>

        <div className="flex gap-6 mr-[500px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold px-4 py-2 rounded-md text-lg transition-all duration-300 ${
                isActive
                  ? "bg-gray-300 text-black shadow-md"
                  : "text-gray-600 hover:bg-gray-200 hover:text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `font-semibold px-4 py-2 rounded-md text-lg transition-all duration-300 ${
                isActive
                  ? "bg-gray-300 text-black shadow-md"
                  : "text-gray-600 hover:bg-gray-200 hover:text-black"
              }`
            }
          >
            Products
          </NavLink>
        </div>

        <div className="flex justify-center items-center gap-5">
          <IoMdSearch className="text-black text-2xl" />
          <IoMdMenu className="h-[30px] w-[30px]" />
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="lg:hidden border-2 border-gray-300 h-[70px] w-full flex justify-between items-center px-6">
        <div className="flex items-center ml-2">
          <div className="text-black font-bold">
            <span className="pl-3 pr-1 py-1 bg-red-500 font-semibold text-white">SHOP</span>
            <span className="pl-1">KNOCK</span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 mr-2">
       <IoMdSearch onClick={(()=>setShowMenu(!showMenu))}  className="text-black text-2xl" />

{showMenu && (
  <div className="absolute top-20 right-2 z-50 w-[90%] max-w-xs">
    <input
      type="text"
      id="search"
      className="peer w-full h-[45px] rounded-xl border-2 border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-transparent shadow-md transition-all duration-300 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:shadow-lg"
      placeholder="Search for products..."
    />
    <label
      htmlFor="search"
      className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all duration-200 
        peer-placeholder-shown:top-[12px] 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400 
        peer-focus:top-2 
        peer-focus:text-sm 
        peer-focus:text-gray-500 
        peer-focus:opacity-0"
    >
      Search for products...
    </label>
  </div>
)}

          <IoMdMenu onClick={(()=>setShowCard(!showCard))} className="h-[30px] w-[30px]"
          
          />

          {showCard && (

       <div className="absolute top-20 right-5 w-52 bg-white rounded-2xl shadow-md p-5 flex flex-col gap-4 z-50 border border-gray-200 transition-all duration-300 hover:scale-[1.02]  hover:shadow-xl">
   
  <NavLink to="/" className="flex justify-center text-gray-800 font-semibold text-base hover:bg-gray-200 hover:scale-[1.01] rounded-md py-2 px-3 transition-all duration-200">
    Home
  </NavLink>
  <NavLink to="/products" className="flex justify-center text-gray-800 font-semibold text-base hover:bg-gray-200 hover:scale-[1.01] rounded-md py-2 px-3 transition-all duration-200">
    Products
  </NavLink>
  <NavLink to="/cart" className="flex justify-center text-gray-800 font-semibold text-base hover:bg-gray-200 hover:scale-[1.01] rounded-md py-2 px-3 transition-all duration-200">
    Cart
  </NavLink>

</div>



      )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
