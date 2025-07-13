import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage=({loggedIn,setLoggedIn})=>{

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");


const navigate = useNavigate();

const login= async (e)=>{

try{
  e.preventDefault();

const loginData={email,password};

  const response=await fetch("https://e-commerce-9xb7.onrender.com/login",{

method:"POST",
body:JSON.stringify(loginData),
headers:{"Content-Type":"application/json"},
credentials: "include"
});


    const data = await response.json();


 if(response.ok ){
 
  // localStorage.setItem("token", data.token); 
setLoggedIn(true);


setTimeout(()=>{

  navigate("/")
},2000)

}else{

  
  alert("Wrong credentials")
}
}catch(error){

  console.log("Error:", error)
}

 
}


    return (

        <>
        {/* <Navbar/> */}
        
        <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww')`,
      }}
    >
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-2xl backdrop-blur-sm bg-opacity-90 w-full max-w-md mx-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back!
        </h2>
        <form className="space-y-6" onSubmit={login}>
          <div>
            <label  className="block text-sm font-medium text-gray-700" >
              Email
            </label>
            <input
             type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" >
              Password
            </label>
            <input
             type="password" name="password" value={password}    onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:text-indigo-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
        <Footer/>
        
        </>
    )
}

export default LoginPage









