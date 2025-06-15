import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/Slice/cartItem";
import { fetchUserCart } from "../components/fetchUserCart";
import { removeFromDb } from "../components/deleteCart";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Cart = ({ setCartUpdated }) => {
  const dispatch = useDispatch();

  const guestCart = useSelector((state) => state.cart.cart);
  const guestTotal = useSelector((state) => state.cart.totalAmount);

  const [userCart, setUserCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await fetch("http://localhost:4000/verify", {
          method: "GET",
          credentials: "include",
        });
        const result = await response.json();
        if (result?.status) {
          setIsLoggedIn(true);
          const backendCart = await fetchUserCart();
          setUserCart(backendCart);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        console.error(err);
      }
    };

    getCart();
  }, []);

  const displayCart = isLoggedIn ? userCart : guestCart;

  const getTotal = () => {
    return displayCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <main className="min-h-screen bg-gray-200 p-4 sm:p-6 md:p-10 font-sans">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#343a40] mb-10">
          🛒 Your Shopping Cart
        </h1>

        <div className="w-full max-w-[1100px] mx-auto bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
          {!displayCart || displayCart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 h-[350px]">
              <img
                src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg"
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
          ) : (
            displayCart.map((product) => (
              <div
                key={product._id || product.id}
                className="flex flex-wrap sm:flex-nowrap items-center justify-between border-b border-gray-200 py-6 gap-4"
              >
                <img
                  src={product.image}
                  alt="product"
                  className="w-20 h-20 object-cover rounded-md border border-gray-300"
                />
                <div className="flex-1 min-w-[150px] ml-4">
                  <h2 className="text-lg font-medium text-[#212529]">
                    {product.title}
                  </h2>
                </div>
                <div className="w-24 text-gray-700 text-md text-center">
                  ${product.price}
                </div>
                <div className="flex items-center gap-2 w-28 justify-center">
                  <label className="text-gray-600 text-sm">Qty:</label>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    readOnly
                    className="w-14 px-2 py-1 border border-gray-300 rounded-md text-center"
                  />
                </div>
                <button
  onClick={async () => {
    if (isLoggedIn) {
      try {
        const result = await removeFromDb(product._id);
        if (result?.message === "Item deleted from database") {
          setUserCart(prev => prev.filter(item => item._id !== product._id));
          setCartUpdated(prev => !prev); // 🔁 Trigger Navbar update
        } else {
          alert("Failed to delete item from backend.");
        }
      } catch (err) {
        console.error("Error removing item:", err);
        alert("Something went wrong. Try again.");
      }
    } else {
      dispatch(removeFromCart(product.id));
    }
  }}
  className="ml-2 px-4 py-2 text-sm sm:text-base border border-red-400 text-red-600 rounded-md hover:bg-red-50 transition duration-200 ease-in-out w-full sm:w-auto font-medium"
>
  ✕ Remove
</button>


                
              </div>
            ))
          )}

          {displayCart.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
              <p className="text-xl sm:text-2xl font-bold text-[#212529]">
                Total: ${isLoggedIn ? getTotal() : guestTotal}
              </p>
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white text-md font-semibold rounded-md hover:bg-[#343a40] transition">
                🧾 Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
