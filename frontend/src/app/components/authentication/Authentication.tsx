"use client"
import React, { useState } from 'react';

const Authentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  const handleLoginButtonClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setName('');
    } else {
      setIsLoggedIn(true);
      setName('Rohit'); // Hardcoded name
    }
  };

  return (
    <div className='bg-gray-100 flex min-h-screen justify-center items-center px-4'>
      <div className='flex flex-col w-full max-w-md shadow-lg rounded-lg overflow-hidden'>
        <div className='bg-blue-600 text-white p-6 flex justify-between items-center'>
          <h1 className='text-lg font-semibold'>App</h1>
          {isLoggedIn && (
            <p className='text-sm mr-4'>Welcome {name}!</p>
          )}
          <button
            onClick={handleLoginButtonClick}
            className='bg-white text-blue-600 font-medium px-4 py-1 rounded-md hover:bg-blue-100 transition duration-300'
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
        <div className='bg-white p-8 text-center'>
          <p className='text-gray-800 text-xl font-semibold'>
            {isLoggedIn
              ? `This is your dashboard, ${name}!`
              : "Please login to access your dashboard"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
