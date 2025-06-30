import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LoginPage from "./Pages/LoginPage";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import Order from "./Pages/Order";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/verify", {
          withCredentials: true,
        });

        if (res.data.status) {
          setUser(res.data.user);
          setLoggedIn(true); 
        }
      } catch (err) {
        console.log("Not logged in", err);
        setLoggedIn(false);
      }
    };

    checkUser();
  }, []);

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} cartUpdated={cartUpdated} setCartUpdated={setCartUpdated}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/login"
          element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path="/products" element={<Products cartUpdated={cartUpdated}  setCartUpdated={setCartUpdated} /> } />
        <Route path="/cart" element={<Cart   loggedIn={loggedIn} cartUpdated={cartUpdated} setCartUpdated={setCartUpdated}/>} />
        <Route path="/Order" element={<Order/>}/>
      </Routes>
    </>
  );
}

export default App;
