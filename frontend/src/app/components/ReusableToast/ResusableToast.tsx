"use client"
import React, { useState } from 'react'
import ToastContainer from './component/ToastContainer';

const ResusableToast = () => {
    const [toast,setToast]=useState(null);

    const showToast=(message,type,duration)=>{
        setToast({message,type});

        setTimeout(()=>{
            setToast(null)
        },duration)
    }
  return (
    <div className='min-h-screen bg-green-100 flex justify-center items-center'>
         <div className='max-w-sm rounded-md bg-white p-4 shadow-md flex gap-4'>
            <button
          onClick={() => showToast("Data saved successfully!", "success", 3000)}
          className="bg-gray-200 rounded-md px-4 py-1"
        >
          Show Success
        </button>
        <button
          onClick={() => showToast("Error saving data!", "error", 5000)}
          className="bg-gray-200 rounded-md px-4 py-1"
        >
          Show Error
        </button>
        <button
          onClick={() => showToast("Information loaded", "info", 4000)}
          className="bg-gray-200 rounded-md px-4 py-1"
        >
          Show Info
        </button>
         </div>
         {
            toast && <ToastContainer message={toast.message} type={toast.type}/>
         }
    </div>
  )
}

export default ResusableToast
