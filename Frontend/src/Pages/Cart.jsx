import Footer from "../components/Footer";
import { useDispatch,useSelector } from "react-redux";
import { removeFromCart } from "../Redux/Slice/cartItem";
import { NavLink } from "react-router-dom";



const Cart = () => {


  
const dispatch=useDispatch();

const cartItems=useSelector((state)=>state.cart.cart)
const totalAmount=useSelector((state)=>state.cart.totalAmount)



  return (
    <>
      

      

      <main className="min-h-screen bg-gray-200 p-4 sm:p-6 md:p-10 font-sans">
  <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#343a40] mb-10">
    🛒 Your Shopping Cart
  </h1>


  

  <div className="w-full max-w-[1100px] mx-auto bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
    
    {

      !cartItems || cartItems.length===0 ?(

<div className="flex flex-col items-center justify-center py-20 h-[350px] ">
  <img
    src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?ga=GA1.1.1364487170.1746868776&semt=ais_hybrid&w=740"
    alt="Empty Cart"
    className="w-50 h-50 mb-6 opacity-70"
  />
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Cart is Empty</h2>
  <NavLink
  to="/products"
  className="mt-[17px] px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-1/2 text-center"
>
  🛍️ Start Shopping
</NavLink>

</div>

      ):(
        
        
        cartItems.map((products) => (
      <div
        key={products.id}
        className="flex flex-wrap sm:flex-nowrap items-center justify-between border-b border-gray-200 py-6 gap-4"
      >

      
        <img
          src={products.image}
          alt="product"
          className="w-20 h-20 object-cover rounded-md border border-gray-300"
        />
        <div className="flex-1 min-w-[150px] ml-4">
          <h2 className="text-lg font-medium text-[#212529]">
            {products.title}
          </h2>
        </div>
        <div className="w-24 text-gray-700 text-md text-center">${products.price}</div>
        <div className="flex items-center gap-2 w-28 justify-center">
          <label className="text-gray-600 text-sm">Qty:</label>
          <input
            type="number"
            min="1"
            value={products.quantity}
            readOnly
            className="w-14 px-2 py-1 border border-gray-300 rounded-md text-center"
          />
        </div>
        <button onClick={()=>dispatch(removeFromCart(products.id))} className="ml-2 px-4 py-2 border border-gray-400 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition">
          ✕ Remove
        </button>



      </div>
    )))}





{

!cartItems || cartItems.length===0 ? (null):(


  <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
  <p className="text-xl sm:text-2xl font-bold text-[#212529]">
    Total: ${totalAmount}
  </p>
  <button  className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white text-md font-semibold rounded-md hover:bg-[#343a40] transition">
    🧾 proceed to checkout
  </button>
</div>


)


 

}
  </div>


</main>

    <Footer/>
    </>
  );
};

export default Cart;

















