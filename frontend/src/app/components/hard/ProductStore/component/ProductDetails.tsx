import React from 'react';

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded shadow max-w-md w-full relative'>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-red-500 font-bold'
        >
          ✕
        </button>
        <img src={product.thumbnail} alt={product.title} className='w-full h-48 object-cover rounded' />
        <h2 className='text-xl font-bold mt-2'>{product.title}</h2>
        <p className='text-gray-600'>{product.description}</p>
        <p className='mt-2 font-semibold'>Price: ${product.price}</p>
        <p className='text-sm text-gray-500'>Brand: {product.brand}</p>
        <p className='text-sm text-gray-500'>Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
