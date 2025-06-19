import React, { useEffect, useState } from "react";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:4000/order", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (data.status && data.orders) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
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
    <main className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
          🧾 Your Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-xl">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="text-lg font-semibold text-gray-800">{order._id}</p>
                  </div>

                  <div className="mt-4 sm:mt-0 text-right">
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="text-md text-gray-700">{formatDate(order.createdAt)}</p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-gray-100 pt-4">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 border border-gray-100 rounded-lg p-3"
                    >
                      <img
                        src={item.image || "https://via.placeholder.com/64"} // fallback if image not saved
                        alt={item.title}
                        className="w-16 h-16 rounded object-cover border"
                      />
                      <div className="flex-1">
                        <h3 className="text-md font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                    <p className="text-lg font-bold text-green-600">${order.totalAmount.toFixed(2)}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Status</p>
                    <span
                      className={`inline-block px-3 py-1 text-sm rounded-full font-medium bg-yellow-100 text-yellow-700`}
                    >
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
  );
};

export default Order;
