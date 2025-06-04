import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import { fetchData } from "../Redux/Slice/productItem";
import { addToCart } from "../Redux/Slice/cartItem";
import { sendCartItem } from "../components/apiCart";





const Products = () => {



  const dispatch = useDispatch();
  const filterState=useSelector((state)=>state.filter.Filter)
  

  const { isLoading, data, isError } = useSelector((state) => state.data);
  const [currentPage, setCurrentPage] = useState(0);
  
  const itemsPerPage = 8
  
  
  const ProductsToRender=filterState && filterState.length > 0 ? filterState : data 
    




  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = ProductsToRender?ProductsToRender.slice(startIndex, endIndex) : [];
  const totalPages = ProductsToRender ? Math.ceil(ProductsToRender.length / itemsPerPage) : 0;


  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  
useEffect(() => {
  setCurrentPage(0);
}, [filterState]);




  return (
    <>
      <section className="bg-gray-100 min-h-screen overflow-x-hidden">
        <div className="flex flex-row min-h-screen overflow-x-hidden">
          {/* Filter Sidebar */}
          <div className="w-auto h-[calc(100vh-80px)] flex-shrink-0 mt-4">
            <Filter data={data} />
          </div>

          {/* Products */}
          <div className="flex-1 p-4">
            {isLoading || data === null ? (
              <div className="flex items-center justify-center h-96">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : isError ? (
              <p className="text-red-500 font-bold text-xl">
                Error fetching data
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {visibleProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between h-[450px]"
                  >
                    <div className="h-[220px] w-full mb-4 overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        alt="product"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-md line-clamp-2 mb-1 flex justify-center">
                      {product.title}
                    </h3>
                    <p className="text-red-500 font-bold text-lg mb-3 flex justify-center">
                      $ {product.price}
                    </p>
                    <div className="mt-auto">
                      <button
                      
                        onClick={() =>{ dispatch(addToCart(product))
                          sendCartItem(product)
                        }}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
                      >
                        Add to Cart
                      </button>


                      




                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className={`px-4 py-2 rounded font-bold ${
                  currentPage === 0
                    ? "bg-white text-black border border-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black"
                }`}
              >
                Prev
              </button>

              <span className="font-bold px-4 py-2 bg-gray-300 rounded-md">
                {currentPage + 1}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className={`px-4 py-2 rounded font-bold ${
                  currentPage === totalPages - 1
                    ? "bg-white text-black border border-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;

















