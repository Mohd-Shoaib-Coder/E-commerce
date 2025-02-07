

import React from "react";
import { motion } from "framer-motion";


const HomePage = () => {
  return (
<>


    <div className="bg-gray-100 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[calc(100vh-70px)] sm:h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2020/05/21/18/52/supermarket-5202138_640.jpg')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center bg-black bg-opacity-50 p-8 rounded-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover the best in lifestyle, electronics, and daily essentials.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>






      



      {/* Fashion & Lifestyle Section */}
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Fashion & Lifestyle
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Male Model */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Male Model"
              className="w-full h-64 object-cover"
            />

<div className="p-6">
        <h3 className="text-xl font-semibold mb-2">MEN's Fashion</h3>
        <p className="text-gray-600 mb-4">Looks does Matters.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
          </motion.div>
          {/* Female Model */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1681486917346-badf6c3b3c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHNob3BwaW5nfGVufDB8fDB8fHww"
              alt="Female Model"
              className="w-full h-64 object-cover"
            />
            
<div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Women's Fashion</h3>
        <p className="text-gray-600 mb-4">Be ready to make him feel jealous.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
          </motion.div>
          {/* Child Model */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsbCUyMHdhcmRyb2JlfGVufDB8fDB8fHww"
              alt="Child Model"
              className="w-full h-64 object-cover"
            />

            
<div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Clothing Collection</h3>
        <p className="text-gray-600 mb-4">Complete your Wardrobe.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-4">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mb-8"
  >
    Featured Products
  </motion.h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Product Card 1 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Product 1" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Stylish Sneakers</h3>
        <p className="text-gray-600 mb-4">Perfect for your daily adventures.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
    </motion.div>

    {/* Product Card 2 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Product 2" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Wireless Headphones</h3>
        <p className="text-gray-600 mb-4">Immerse yourself in music.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
    </motion.div>

    {/* Product Card 3 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Product 3" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Smart Watch</h3>
        <p className="text-gray-600 mb-4">Stay connected and stylish.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
    </motion.div>
  </div>
</section>

      
    </div>






    </>
  );
};

export default HomePage;


// https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
//https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?t=st=1738849338~exp=1738852938~hmac=781f8c187a0c48037467cddec927d51942023aa01835c6f9f3b8b1ffa6a2bc20&w=1060