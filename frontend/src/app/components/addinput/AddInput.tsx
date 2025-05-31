"use client"
import React, { useState } from 'react';

const AddInput = () => {
  const [inputs, setInputs] = useState([]); // <-- Start with an empty array

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleDeleteInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div className='min-h-screen bg-green-100 p-20'>
      <button
        onClick={handleAddInput}
        className='px-5 py-2 rounded-md bg-green-500 text-black mb-5'
      >
        Add Input
      </button>

      <div className='space-y-3'>
        {inputs.map((input, index) => (
          <div key={index} className='flex items-center gap-2'>
            <input
              type='text'
              value={input}
              onChange={(e) => handleChange(index, e.target.value)}
              className='flex-1 px-4 py-2 border border-gray-300 rounded-md'
              placeholder={`Input ${index + 1}`}
            />
            <button
              onClick={() => handleDeleteInput(index)}
              className='px-3 py-2 bg-red-500 text-white rounded-md'
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddInput;
