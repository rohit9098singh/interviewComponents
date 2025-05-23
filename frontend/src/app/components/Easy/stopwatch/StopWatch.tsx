'use client'
import React, { useState, useRef } from 'react';

const StopWatch = () => {
   const [seconds,setSeconds]=useState(0);
   const timerRef=useRef(null)

   const handleStartTimer=()=>{
       if(timerRef.current!==null) return;
       timerRef.current=setInterval(()=>{
          setSeconds((prev)=>prev+1);
       },1000)
   }

  const handleStopTimer=()=>{
    clearInterval(timerRef.current);
    timerRef.current=null;
  }

  const handleResetTimer=()=>{
     clearInterval(timerRef.current);
    timerRef.current=null;
    setSeconds(0);
  }
  return (
    <div className='min-h-screen mt-32'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='font-bold text-2xl mb-5 text-left'>Time: {seconds} sec</h1>
        <div className='flex gap-2'>
          <button
            onClick={handleStartTimer}
            className='bg-gray-200 px-4 py-1 rounded-md'
          >
            Start
          </button>
          <button
            onClick={handleStopTimer}
            className='bg-gray-200 px-4 py-1 rounded-md'
          >
            Stop
          </button>
          <button
            onClick={handleResetTimer}
            className='bg-gray-200 px-4 py-1 rounded-md'
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;

// To hum useRef() ka use kyu kar rahe hain?
// React ka useRef() sirf DOM element ke liye nahi hota. Yeh ek mutable object deta hai jisme aap kuch bhi store kar sakte ho bina re-render trigger kiye.

//timerRef.current ek normal variable ki tarah kaam kar raha hai.

// Hum isme setInterval() ka ID store kar rahe hain:


// Fir clearInterval(timerRef.current) se usi ID ko stop kar rahe hain.