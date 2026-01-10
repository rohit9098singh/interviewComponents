"use client"
import React, { useState } from 'react';

const AddInput = () => {
  const [inputs, setInputs] = useState<{ id: number; value: string }[]>([]);

  const handleAddInput = () => {
    const newInput = { id: inputs.length + 1, value: "" }; // unique id + value
    setInputs([...inputs, newInput]);
  };

 const handleChange = (id: number, value: string) => {
  setInputs((prev) =>
    prev.map((input) =>
      input.id === id ? { ...input, value } : input
    )
  );
};

  const handleDeleteInput = (id: number) => {
    const newInputs = inputs.filter((input) => input.id !== id);
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
        {inputs.map((input) => (
          <div key={input.id} className='flex items-center gap-2'>
            <input
              type='text'
              value={input.value}
              onChange={(e) => handleChange(input.id, e.target.value)}
              className='flex-1 px-4 py-2 border border-gray-300 rounded-md'
              placeholder={`Input ${input.id}`}
            />
            <button
              onClick={() => handleDeleteInput(input.id)}
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

