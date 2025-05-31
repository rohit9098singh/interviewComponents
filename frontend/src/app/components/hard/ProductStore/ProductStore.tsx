"use client";
import React, { useState, useEffect } from 'react';
import AllProduct from './component/AllProduct';

const ProductStore = () => {
  const [product, setProduct] = useState([]);
  const [showProducts, setShowProducts] = useState(false); // <-- Control view

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProduct(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-500 p-4 w-full fixed top-0 z-10">
        <div className="flex justify-end gap-5 font-bold text-white">
          <button onClick={() => setShowProducts(false)}>Home</button>
          <button onClick={() => setShowProducts(true)}>Products</button>
        </div>
      </div>

      
      <div className="">
        {showProducts ? (
          <AllProduct products={product} />
        ) : (
          <h1 className="pt-24 text-center font-bold text-2xl mt-10">
            Welcome to the Home page
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProductStore;
