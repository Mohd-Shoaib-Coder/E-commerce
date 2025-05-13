import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import{useDispatch,useSelector} from "react-redux";
import { fetchData } from "../Redux/Slice/productItem";
import { useEffect ,useState} from "react";
import { addToCart } from "../Redux/Slice/cartItem";


const Products=()=>{


const dispatch =useDispatch();

const {isLoading,data,isError}=useSelector((state)=>state.data)
const addItemCart=useSelector((state)=>state.cart)


useEffect(()=>{


dispatch(fetchData());

},[dispatch]);






    return (

<>
{/* <Navbar/> */}
<section className="p-6 bg-gray-200 flex">

    {/* filter products  */}



<div className="h-[calc(100vh-80px)] w-1/5  bg-white p-4 ">

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

<div className=" flex flex-column flex-wrap min-w-full ml-10">
{isLoading || data===null?(  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>) 

: isError?( <p className="text-red-500 font-bold text-xl">Error fetching data</p>)




: (

  data.map((products)=>(

    <div className="" key={products.id}>


{/* <div className="ml-10 border-2 mt-2"> */}

<div className="flex flex-wrap flex-col w-full  pl-3 bg-gray-200  ">

<div className="flex flex-wrap justify-evenly ">


<div className="h-[400px] w-[300px]  p-2 flex flex-col items-center rounded-2xl mb-6 bg-white">
  <div className="h-[250px] w-full overflow-hidden ">
    <img
      src={products.image}
      alt="product"
      className="w-full h-full object-cover"
    />
  </div>
  <p className="mt-3 font-bold text-lg">{products.title}</p>
  <p className="text-red-500 font-bold  text-lg">$ {products.price}</p>
  <button onClick={()=>dispatch(addToCart(products))} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded font-extrabold text-xl w-9/10 hover:bg-blue-600" >Add to Cart</button>
</div>


</div>
</div>
</div>
// </div>




    
  ))
)


}





<div className="flex justify-center items-center space-x-2 mt-8  w-full">
  <button className="px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800">1</button>
  <button className="px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800">2</button>
  
  <span className="px-4 py-2 font-bold">...</span>
  <button className="px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800">NEXT</button>
</div>









</div>


























</section>










<Footer/>



</>



    )
}

export default Products;







