


import { BrowserRouter,Routes,Route } from "react-router-dom" 
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LoginPage from "./Pages/LoginPage";
import Products from "./Pages/Products";  
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import { useState } from "react";


function App() {
 
  const [loggedIn,setLoggedIn]=useState(false);
  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/cart" element={<Cart/>}/>

   </Routes>
    </>
  )
}

export default App
