import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Products=()=>{




    return (

<>
<Navbar/>
<section className="h-[calc(100vh-80px)] w-1/5 border-2 p-4">

<div className="border-2 ">

    <div className="bg-red-600 ">Filter Products</div>

    <div>

<div className="flex gap-2 flex-start ">

<p>Price Increase</p>
<input type="checkbox" />
</div>


<div className="flex gap-2 flex-start ">

<p>Price Decrease</p>
<input type="checkbox" />
</div>




<div className="flex gap-2 flex-start ">

<p>Sort A to Z </p>
<input type="checkbox" />
</div>



<div className="flex gap-2 flex-start ">

<p>Men</p>
<input type="checkbox" />
</div>



<div className="flex gap-2 flex-start ">

<p>Women</p>
<input type="checkbox" />
</div>


    </div>



</div>

</section>
<Footer/>



</>



    )
}

export default Products;