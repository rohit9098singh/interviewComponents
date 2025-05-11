"use client"
import React, { useEffect, useRef, useState } from 'react'

const otpbox=5;
const Practice = () => {
    const [inputArray,setInputArray]=useState(new Array(otpbox).fill(""));
    const inputRef=useRef([]);

    useEffect(()=>{
          inputRef.current[0]?.focus();
    },[])
    const handleChange=(value,index)=>{
       if(isNaN(value)) return;
       const newValue=value.trim();
       const newArray=[...inputArray];
       newArray[index]=newValue.slice(-1);
       setInputArray(newArray)
       newValue && inputRef.current[index+1]?.focus();
    }

    const handleKeyChange=(e,index)=>{
        if(e.key==="Backspace" && !e.target.value){
              inputRef.current[index-1]?.focus();
        }
        if(e.key==="ArrowLeft" && !e.target.value){
              inputRef.current[index-1]?.focus();
        }
        if(e.key==="ArrowRight" && !e.target.value){
              inputRef.current[index+1]?.focus();
        }
    }
  return (
    <div className='flex justify-center mt-20'>
        {
            inputArray.map((input,index)=>(
                    <input 
                     key={index}
                     type="text" 
                     className='border border-gray-500 m-2 h-10 w-10 rounded-md p-2'
                     ref={(el)=>(inputRef.current[index]=el)}
                     value={inputArray[index]}
                     onChange={(e)=>handleChange(e.target.value,index)}
                     onKeyDown={(e)=>handleKeyChange(e,index)}
                   />
            ))
        }
    </div>
  )
}

export default Practice
