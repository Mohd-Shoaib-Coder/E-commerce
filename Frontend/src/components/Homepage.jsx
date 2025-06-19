

import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import {  AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import banner1 from "../utils/banner1.jpg";
import banner2 from "../utils/banner2.jpg";
import banner3 from "../utils/banner3.jpg";
import banner4 from "../utils/banner4.jpg";



const images = [banner3,banner1,banner2,banner4]

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // ⏱️ Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval); // Clear on unmount
  }, []);

  return (
<>


    <div className="bg-gray-100 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[calc(100vh-70px)] sm:h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/flat-lay-black-friday-tags-with-shopping-cart_23-2148285102.jpg?t=st=1739700818~exp=1739704418~hmac=67d6f23ac58d05c070cfca6f03a51b8238999a84139fc96b4cdffc90d76add8b&w=1060')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center bg-black p-8 rounded-lg"
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
            <NavLink to="/products">Shop Now</NavLink>
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
        <NavLink to="/products" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Shop Now
        </NavLink>
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
        <NavLink to="/products" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Shop Now
        </NavLink>
      </div>
          </motion.div>
          {/* Child Model */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1671469876887-b2733ac9c785?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nJTIwY29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Child Model"
              className="w-full h-64 object-cover"
            />

            
<div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Clothing Collection</h3>
        <p className="text-gray-600 mb-4">Complete your Wardrobe.</p>
        <NavLink to="/products" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
        Shop Now
        </NavLink>
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

   

 {/* Image Carousel */}
<section className="relative w-full max-w-5xl mx-auto my-10">
  <div className="overflow-hidden relative h-[300px] rounded-lg shadow-lg">
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="absolute w-full h-full object-cover"
        initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>
  </div>

  {/* Centered BIG Buttons with Equal Top/Bottom Padding */}
  <div className="absolute inset-y-0 w-full flex justify-between items-center px-4 z-10">
    <button
      onClick={prevImage}
      className="bg-white/80 hover:bg-white text-gray-800 text-4xl rounded-full w-14 h-14 shadow-md border border-gray-300 flex items-center justify-center transition duration-200"
    >
      <span className="flex items-center justify-center h-full w-full"><FaArrowLeft /></span>
    </button>
    <button
      onClick={nextImage}
      className="bg-white/80 hover:bg-white text-gray-800 text-4xl rounded-full w-14 h-14 shadow-md border border-gray-300 flex items-center justify-center transition duration-200"
    >
      <span className="flex items-center justify-center h-full w-full"><FaArrowRight /></span>
    </button>
  </div>
</section>




    Featured Products
  </motion.h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Product Card 1 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww" alt="Product 1" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Stylish Sneakers</h3>
        <p className="text-gray-600 mb-4">Perfect for your daily adventures.</p>
        <NavLink to="/products" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
        Shop Now
        </NavLink>
      </div>
    </motion.div>

    {/* Product Card 2 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src="https://media.istockphoto.com/id/1633583827/photo/young-boy-listening-music-and-dancing-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OyZ6krUUy6SYwnaEcbCmh7OajTE_NLNXPbeTkgI8C2U=" alt="Product 2" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Wireless Headphones</h3>
        <p className="text-gray-600 mb-4">Immerse yourself in music.</p>
        <NavLink to="/products" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
        Shop Now
        </NavLink>
      </div>
    </motion.div>

    {/* Product Card 3 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src="https://plus.unsplash.com/premium_photo-1714306767578-84587d000c48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" alt="Product 3" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Smart Watch</h3>
        <p className="text-gray-600 mb-4">Stay connected and stylish.</p>
        <NavLink to="/products" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
        Shop Now
        </NavLink>
      </div>
    </motion.div>
  </div>
</section>


<section className="w-full max-w-7xl mx-auto px-4 py-16">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl font-bold text-center mb-10 text-gray-800"
  >
    🌟 Our Trusted Brand Partners
  </motion.h2>

  <div className="border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-10">
    <div className="flex flex-wrap justify-center gap-10 items-center">
      {[
        {
          name: "Shopee",
          src: "https://freepngimg.com/thumb/logo/109004-shopee-logo-free-transparent-image-hq-thumb.png",
        },
        {
          name: "Zara",
          src: "https://freepngimg.com/thumb/zara/173263-zara-free-hq-image-thumb.png",
        },
        {
          name: "Adidas",
          src: "https://freepngimg.com/thumb/logo/69593-originals-adidas-smith-stan-logo-sportswear-thumb.png",
        },
        {
          name: "Nike",
          src: "https://freepngimg.com/thumb/nike/28093-5-nike-logo-image-thumb.png",
        },
        {
          name: "Haier",
          src: "https://freepngimg.com/thumb/logo/110052-logo-haier-free-download-image-thumb.png",
        },
      ].map((brand, index) => (
        <motion.div
          key={index}
          className="p-4 bg-white rounded-xl border border-gray-200 shadow hover:shadow-xl transition duration-300 flex items-center justify-center w-32 h-32"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={brand.src}
            alt={brand.name}
            className="h-16 w-auto object-contain transition duration-300"
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>


      
    </div>






    </>
  );
};

export default HomePage;

//https://cdn.pixabay.com/photo/2020/05/21/18/52/supermarket-5202138_640.jpg