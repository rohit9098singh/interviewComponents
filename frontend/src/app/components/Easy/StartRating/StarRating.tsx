"use client"
import React, { useState } from 'react'

const StarRating = () => {
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0)
  return (
    <div className='min-h-screen bg-green-50 flex justify-center items-center'>
         <div className='max-w-3xl flex flex-col gap-4 rounded-md bg-white shadow-lg p-4'>
            <h1 className='text-2xl font-bold'>Star rating</h1>
            <p className='text-gray-400 text-lg font-semibold'>by NamasteDev</p>
            <div className='flex gap-2'>
                 {
                [1,2,3,4,5].map((star)=>(
                     <span
                      key={star}
                      onClick={()=>setRating(star)}
                      onMouseEnter={()=>setHover(star)}
                      onMouseLeave={()=>setHover(0)}
                      className={`text-3xl cursor-pointer ${(hover || rating )>=star ? "text-yellow-500":"text-gray-400"}`}
                      >
                         ★  
                     </span>
                ))
            }
            </div>
            <p className='text-lg font-semibold'>
                {rating ===0 ? "No rating yet":`you rated: ${rating} stars`}
            </p>

            <button onClick={()=>{setRating(0)}} className='bg-gray-200 px-4 py-1 rounded-md'>Reset Rating</button>
           
         </div>
    </div>
  )
}

export default StarRating
