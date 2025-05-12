"use client"
import React, { useEffect, useState } from 'react'

const Pagination = () => {

  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProduct(json.products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // pagination logic
  const totalProduct = product.length;
  const productPerPage = 10;
  const totalPages = Math.ceil(totalProduct / productPerPage);

  const handlePageClick = (pageClick) => {
    setCurrentPage(pageClick);
  };

  const handleClickNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handleClickPrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const start = currentPage * productPerPage;
  const end = start + productPerPage;

  return (
    <div className='bg-gray-200 min-h-screen '>
      <div className='max-w-7xl mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Pagination Question</h1>

        {/* Pagination Controls */}
        <div className='mb-4'>
          <button
            disabled={currentPage === 0}
            onClick={handleClickPrev}
            className='p-2 mx-1 rounded-md bg-gray-300 disabled:opacity-50'
          >
            ◀️
          </button>

          {[...Array(totalPages).keys()].map((n) => (
            <span
              key={n}
              onClick={() => handlePageClick(n)}
              className={`p-2 cursor-pointer rounded-md mx-1 ${
                n === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-400 text-green-500'
              }`}
            >
              {n + 1}
            </span>
          ))}

          <button
            disabled={currentPage === totalPages - 1}
            onClick={handleClickNext}
            className='p-2 mx-1 rounded-md bg-gray-300 disabled:opacity-50'
          >
            ▶️
          </button>
        </div>

        {/* Product List */}
        {product.length === 0 ? (
          <h1>No Product Found</h1>
        ) : (
          product.slice(start, end).map((p) => (
            <div key={p.id} className='flex flex-col items-center w-40 border border-gray-900 mb-2 p-2'>
              <img src={p.thumbnail} alt={p.title} className='w-20 h-20 object-cover mr-4' />
              <p className='text-lg font-medium'>{p.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Pagination;
