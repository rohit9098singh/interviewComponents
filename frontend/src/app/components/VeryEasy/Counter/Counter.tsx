"use client"
import React, { useState } from 'react'

const Counter = () => {
    const [countValue,setCountValue]=useState(0);

    const handleIncrement=()=>{
       setCountValue((prev)=>prev +1);
    }

    const handleDecrement=()=>{
        setCountValue((prev)=>prev > 0? prev -1 :0)
    }

    const handleReset=()=>{
        setCountValue(0)
    }
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold '>React Counter App </h1>
            <p>Counter : {countValue}</p>
             <div className='flex gap-2'>
                <button onClick={handleIncrement} className='p-2 bg-gray-300 rounded'>Incremet</button>
                <button onClick={handleDecrement}   className='p-2 bg-gray-300 rounded'>Decrement</button>
                <button  onClick={handleReset}  className='p-2 bg-gray-300 rounded'>Reset</button>
             </div>

        </div>

    </div>
  ) 
}

export default Counter
