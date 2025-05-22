"use client"
import React, { useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.focus();
  }

  return (
    <div className='min-h-screen bg-gray-200 flex justify-center items-center'>
      <div className='max-w-5xl bg-white shadow-md min-h-40 flex items-center p-8'>
        <div className='flex gap-4'>
          <input
            ref={inputRef}
            type="text"
            className='p-4 border border-gray-200 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            onClick={handleFocusInput}
            className='bg-gray-300 rounded-md px-2 py-0 font-bold'
          >
            Focus input
          </button>
        </div>
      </div>
    </div>
  )
}

export default FocusInput
