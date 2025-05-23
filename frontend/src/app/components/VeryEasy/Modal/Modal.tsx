"use client"
import React, { useState } from 'react'

const Modal = () => {
    const [isModalOpen,setIsModalOpen]=useState(false)
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 ">
      <h1 className="text-2xl font-bold text-black mb-6">Modal Popup Example</h1>
      <button
        onClick={()=>setIsModalOpen(true)}
        className="w-32 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Open Modal
      </button>
      {
        isModalOpen && (
            <div className='fixed flex items-center justify-center inset-0 bg-black/50 z-50'>
                   <div className='bg-white max-w-md rounded-md w-full p-6 flex flex-col items-center'>
                      <h2 className='text-gray-700 mb-6'>
                          Modal Header
                      </h2>
                      <h3 className='mb-6'>This is the modal Body</h3>

                      <button onClick={()=>{setIsModalOpen(false)}} className='bg-gray-200 px-3 py-1 rounded-md'>
                         Close
                      </button>

                   </div>
            </div>
        )
      }
    </div>
  )
}

export default Modal
 