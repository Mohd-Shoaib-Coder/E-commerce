import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { NavLink, useNavigate,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchUserCart } from "./fetchUserCart";
import { CgProfile } from "react-icons/cg";
import { setSearchQuery } from "../Redux/Slice/searchItems";
import Order from "../Pages/Order";


const Navbar = ({ loggedIn, setLoggedIn,cartUpdated }) => {


  const cartItems = useSelector((state) => state.cart.cart);

  const [showCard,setShowCard]=useState(false);
  const [showMenu,setShowMenu]=useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [localQuery,setLocalQuery]=useState("");

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location = useLocation();




 useEffect(() => {
  dispatch(setSearchQuery(localQuery)); 
}, [localQuery, dispatch]);



useEffect(() => {
  if (location.pathname !== "/products") {
    setLocalQuery("");
  }
}, [location]);



useEffect(() => {
  if (!loggedIn) {
    setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }
}, [cartItems, loggedIn]);


const handleSearch = (e) => {
  if (e.key === "Enter" && localQuery.trim()) {
    dispatch(setSearchQuery(localQuery));
    navigate("/products");
    setShowMenu(false);
  }
};

const closeDropdowns = () => {
  setShowMenu(false);
  setShowCard(false);
};



useEffect(() => {
  const checkLogin = async () => {
    try {
      const res = await fetch("https://e-commerce-backend-15s7.onrender.com/verify", {
        method: "GET",
        credentials: "include",
      });
      const result = await res.json();

      if (result?.status) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (err) {
      console.error("Login check error:", err);
      setLoggedIn(false);
    }
  };

  checkLogin();
}, []);





useEffect(() => {
  const fetchCart = async () => {
    if (loggedIn) {
      const userCart = await fetchUserCart();
      setCartCount(userCart.reduce((acc, item) => acc + item.quantity, 0));
    } else {
     
      setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
    }
  };

  fetchCart();
}, [loggedIn, cartUpdated, cartItems]);







  const logOut=async()=>{
 
    try{

      const token=localStorage.getItem("token");

      const response=await fetch("http://localhost:4000/logout",{

        method:"POST",
        credentials:"include"
      })

      if(!response.ok){

        throw new Error("Failed to Logout")
      }


const data=await response.json();


localStorage.removeItem("token");
setLoggedIn(false);

window.location.reload();


    }catch(error){

      console.error("Logout error:" ,error.message);
      throw error;
    }




  }


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
  className="h-[50px] w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-md transition-all duration-300 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:shadow-lg focus:scale-[1.01]"
  placeholder="Search for products..."
  value={localQuery}
  onChange={(e) => setLocalQuery(e.target.value)}
  onKeyDown={handleSearch}
/>
   
  </div>

  {/* Cart + Auth Buttons */}
  <div className="flex items-center gap-6 mr-6">
    <NavLink to="/cart" className="relative flex items-center">
      <FaShoppingCart className="h-[28px] w-[28px] text-red-600 hover:text-red-800 transition duration-300" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
          {cartCount}
        </span>
      )}
    </NavLink>

    {loggedIn && (
<NavLink
  to="/Order"
  className={({ isActive }) =>
    `p-2 rounded-md ${isActive
      ? "bg-gray-300 text-black shadow-md"
      : "text-gray-600 hover:bg-gray-200 hover:text-black"}`
  }
>
  <CgProfile className="text-3xl" />
</NavLink>








    )}

    <div className="bg-black text-white h-[45px] w-[90px] rounded-md flex justify-center items-center font-semibold text-lg hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300">
      {loggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
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
      placeholder={localQuery === "" ? "Search for products..." : ""}
      value={localQuery}
      onChange={(e)=>setLocalQuery(e.target.value)}
      onKeyDown={handleSearch}
    />
    
  </div>
)}

          <IoMdMenu onClick={(()=>setShowCard(!showCard))} className="h-[30px] w-[30px]"
          
          />

          {showCard && (

       <div className="absolute top-20 right-5 w-52 bg-white rounded-2xl shadow-md p-5 flex flex-col gap-4 z-50 border border-gray-200 transition-all duration-300 hover:scale-[1.02]  hover:shadow-xl">
   
  <NavLink to="/" onClick={closeDropdowns} className="flex justify-center text-gray-800 font-semibold text-base hover:bg-gray-200 hover:scale-[1.01] rounded-md py-2 px-3 transition-all duration-200">
    Home
  </NavLink>
  <NavLink to="/products" onClick={closeDropdowns} className="flex justify-center text-gray-800 font-semibold text-base hover:bg-gray-200 hover:scale-[1.01] rounded-md py-2 px-3 transition-all duration-200">
    Products
  </NavLink>
  <NavLink to="/Order" onClick={closeDropdowns} className="flex justify-center text-gray-800 font-semibold text-base hover:bg-gray-200 hover:scale-[1.01] rounded-md py-2 px-3 transition-all duration-200">
    Orders
  </NavLink>
  <NavLink to="/cart" onClick={closeDropdowns} className="flex justify-center text-gray-800 font-semibold text-base hover:bg-gray-200 hover:scale-[1.01] rounded-md py-2 px-3 transition-all duration-200">
    Cart
  </NavLink>
{
  loggedIn ? 
  <button 
    onClick={()=>{
      logOut();
      closeDropdowns();
    }} 
    className="flex justify-center text-gray-800 font-semibold text-base hover:bg-gray-200 hover:scale-[1.01] rounded-md py-2 px-3 transition-all duration-200"
  >
    LogOut
  </button> : 
  <NavLink to="/login" onClick={closeDropdowns} className="flex justify-center text-gray-800 font-semibold text-base hover:bg-gray-200 hover:scale-[1.01] rounded-md py-2 px-3 transition-all duration-200">
    LogIn
  </NavLink>
}
 

</div>



      )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

