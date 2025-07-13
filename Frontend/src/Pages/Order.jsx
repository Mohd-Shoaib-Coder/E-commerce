import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import emptyAnimation from "../assets/empty-box.json"; 
import Footer from "../components/Footer";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://e-commerce-backend-15s7.onrender.com/order", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (response.status === 401) {
          setAuthError(data.error || "Please login before making an order");
          return;
        }

        if (data.status && data.orders) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setAuthError("Something went wrong while fetching orders.");
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-4 sm:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-purple-700 mb-10">
          🛍️ Your Orders
        </h1>

        {authError ? (
          <div className="text-center text-red-600 text-xl mt-20">
            {authError}
          </div>
        ) : orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-16">
            <div className="w-[280px] sm:w-[360px] md:w-[420px] mb-6">
              <Lottie animationData={emptyAnimation} loop={true} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2">
              No Orders Yet!
            </h2>
           
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Order ID</p>
                    <p className="text-lg font-bold text-indigo-600 break-words">
                      {order._id}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-0 text-sm text-right">
                    <p className="text-gray-400">Order Date</p>
                    <p className="text-gray-700 font-medium">
                      {formatDate(order.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border hover:bg-gray-100 transition"
                    >
                      <img
                        src={item.image || "https://via.placeholder.com/64"}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover border"
                      />
                      <div className="flex-1">
                        <h3 className="text-md font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Quantity:{" "}
                          <span className="font-medium text-gray-700">
                            {item.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-sm text-gray-400 mb-1">Total Amount</p>
                    <p className="text-xl font-bold text-green-600">
                      ${order.totalAmount.toFixed(2)}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-1">Status</p>
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-200 text-yellow-800 shadow-sm">
                      Processing
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>

    <Footer/>

    </>
  );
};

export default Order;
