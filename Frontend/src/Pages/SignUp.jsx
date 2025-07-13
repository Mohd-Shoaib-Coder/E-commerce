import  React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const SignUp=()=>{


  const navigate=useNavigate();

  const[firstname,setFirstName]=useState("");

  const [lastname,setLastName]=useState("");

  const [email,setEmail]=useState("");

  const [number,setNumber]=useState("")

  const [password,setPassword]=useState("")

  const [cnfrmpassword,setCnfrmPassword]=useState("")
  
  const signupUser =async(e)=>{

if(password !== cnfrmpassword){

  alert("passowrd doesnt match");
  return;
}


e.preventDefault();

const response = await fetch("https://e-commerce-backend-15s7.onrender.com/signup",{
  method:"POST",
  body:JSON.stringify({firstname,lastname,email,number,password,cnfrmpassword}),
  headers:{"Content-Type":"application/json"},
  

 })


 if(response.ok){

  setTimeout(() => {
    
    navigate("/login")
  }, 2000);
  
 }else{

  alert("signup failed")
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
          Create Your Account
        </h2>
        <form className="space-y-4 sm:space-y-6" onSubmit={signupUser} >
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={firstname}
                onChange={(e)=>setFirstName(e.target.value)}
                required
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={lastname}
                onChange={(e)=>setLastName(e.target.value)}
        
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={number}
              onChange={(e)=>setNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={cnfrmpassword}
              onChange={(e)=>setCnfrmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
        
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:text-indigo-500">
            Log in
          </a>
        </p>
      </div>
    </div>
        <Footer/>
        </>
    )
}

export default SignUp