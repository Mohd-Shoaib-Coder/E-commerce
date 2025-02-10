

// import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom" 
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LoginPage from "./Pages/LoginPage";
import Products from "./Pages/Products";  
import Cart from "./Pages/Cart";



function App() {
 

  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/cart" element={<Cart/>}/>

   </Routes>
    </>
  )
}

export default App
