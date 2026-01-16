"use client";
import React, { useEffect, useRef, useState } from "react";

const otpBoxes = 5;

const Otp: React.FC = () => {
  // State: array of strings
  const [inputArray, setInputArray] = useState<string[]>(
    new Array(otpBoxes).fill("")
  );

  // Ref: array of input elements
  const inputRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  // Change handler
  const handleChange = (value: string, index: number): void => {
    if (isNaN(Number(value))) return;

    const newValue = value.trim().slice(-1);
    const newArr = [...inputArray];

    newArr[index] = newValue;
    setInputArray(newArr);

    if (newValue) {
      inputRef.current[index + 1]?.focus();
    }
  };

  // Key handler
  const handleKeyChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (e.key === "Backspace" && !inputArray[index]) {
      inputRef.current[index - 1]?.focus();
    }

    if (e.key === "ArrowLeft" && !inputArray[index]) {
      inputRef.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && !inputArray[index]) {
      inputRef.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center mt-20">
      {inputArray.map((input, index) => (
        <input
          key={index}
          type="text"
          ref={(el: HTMLInputElement | null) => {
            inputRef.current[index] = el;
          }}
          className="m-1 rounded-md h-10 w-10 border border-black text-center"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value, index)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleKeyChange(e, index)
          }
        />

      ))}
    </div>
  );
};

export default Otp;
