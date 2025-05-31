"use client";
import React, { useState } from 'react';
import ProductDetails from './ProductDetails';

const AllProduct = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); 

  return (
    <div className='mt-[64px] px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((item) => (
          <div key={item.id} className='border p-4 rounded shadow'>
            <img src={item.thumbnail} alt={item.title} className='h-32 w-full object-cover rounded' />
            <h2 className='font-bold mt-2'>{item.title}</h2>
            <p className='text-sm text-gray-600'>${item.price}</p>
            <button
              onClick={() => setSelectedProduct(item)}  
              className='text-blue-500 hover:underline mt-2'
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default AllProduct;
