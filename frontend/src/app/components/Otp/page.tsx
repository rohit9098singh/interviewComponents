"use client";
import React, { useEffect, useRef, useState } from "react";

const otpBoxes = 5;

const Otp = () => {
  const [inputArray, setInputArray] = useState(new Array(otpBoxes).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus(); 
  }, []);

  const handleChange = (value, index) => {
    if(isNaN(value)) return ;
    const newValue=value.trim();
    const newArr = [...inputArray];
    newArr[index] = newValue.slice(-1);
    setInputArray(newArr);
    newValue&&inputRef.current[index+1]?.focus();
  };
  const handleKeyChange=(e,index)=>{
    console.log(e.key);
    if(!e.target.value &&  e.key==="Backspace"){
       inputRef.current[index-1]?.focus(); 
    }
    if(e.key==="ArrowLeft" && !e.target.value){
        inputRef.current[index-1]?.focus();
    }
    if(e.key==="ArrowRight"  && !e.target.value){
        inputRef.current[index-1]?.focus();

    }
  
  }


  return (
    <div className="flex justify-center mt-20">
      {inputArray.map((input, index) => (
        <input
          key={index}
          type="text"
          ref={(el) => (inputRef.current[index] = el)}
          className="m-1 rounded-md h-10 w-10 border border-black text-center"
          value={inputArray[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e)=>handleKeyChange(e,index)}
        />
      ))}
    </div>
  );
};

export default Otp;
