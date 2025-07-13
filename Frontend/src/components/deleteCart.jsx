export const  removeFromDb=async(itemId)=>{
try{
const response =await fetch("https://e-commerce-backend-gshd.onrender.com/delete",{

method:"POST",
credentials:"include",
headers:{
    "Content-Type":"application/json",
},

body: JSON.stringify({ itemId })




})

if(!response.ok)throw new Error("failed to remove Item")

    return await response.json();



}catch(err){

    console.log("Remove cart Error",err.message)
}
}
