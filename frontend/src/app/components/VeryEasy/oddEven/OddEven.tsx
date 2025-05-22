"use client";
import React, { useState } from 'react';

const OddEven = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleOddEvenCheck = () => {
    if (number === '') {
      setResult("Please enter a number.");
      return;
    }
    
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Invalid input. Enter a number.");
      return;
    }

    if (num % 2 === 0) {
      setResult(`${num} is Even`);
    } else {
      setResult(`${num} is Odd`);
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-tl from-purple-400 to-blue-400'>
      <div className='max-w-4xl w-full p-6 shadow-md bg-purple-200 rounded-md'>
        <h1 className='font-bold text-2xl text-purple-900'>Even or Odd Checker</h1>
        <div className='flex flex-col mt-4 gap-4'>
          <input
            type="number"
            className='p-2 bg-gray-200 rounded-md'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
          />
          <button
            onClick={handleOddEvenCheck}
            className='bg-purple-500 text-white p-2 rounded-md w-[200px] mx-auto hover:bg-purple-600 transition'
          >
            Submit
          </button>
        </div>

        {!result ? (
            <p>Result Appears here once valid input there </p>
        ): (
          <div className='mt-4 text-center text-lg font-semibold text-purple-800'>
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default OddEven;
