"use client";
import React, { useEffect, useState } from "react";

const GuessNumber = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);

  const GenerateRandomNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(number);
    setMessage("");
    setValue("");
  };

  useEffect(() => {
    GenerateRandomNumber();
  }, []);

  const checkGuess = () => {
    const guess = parseInt(value);

    if (!guess || guess < 1 || guess > 10) {
      setMessage("⚠️ Please enter a number between 1 and 10");
      return;
    }

    if (guess === randomNumber) {
      setMessage("🎉 Correct! You guessed the number!");
    } else if (guess < randomNumber) {
      setMessage("📉 Too Low! Try Again.");
    } else {
      setMessage("📈 Too High! Try Again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">Guess the Number</h1>
      <div className="flex flex-col gap-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-gray-200 p-2 border border-gray-400 rounded-md"
          placeholder="Enter a number 1-10"
        />
        <div className="flex justify-between items-center gap-2">
          <button
            onClick={checkGuess}
            className="bg-gray-200 rounded-md px-2 py-1 hover:bg-gray-300"
          >
            Check Guess
          </button>
          <button
            onClick={GenerateRandomNumber}
            className="bg-gray-200 rounded-md px-2 py-1 hover:bg-gray-300"
          >
            Reset Game
          </button>
        </div>
      </div>

      {message && (
        <div className="mt-4 text-lg font-semibold">{message}</div>
      )}
    </div>
  );
};

export default GuessNumber;


// import React from 'react';

// const GuessNumber = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="bg-orange-200 p-4 z-50">
//         Header
//       </div>

//       {/* Middle Content */}
//       <div className="flex flex-row flex-grow">
//         <div className="w-1/4 bg-red-200">
//           25%
//         </div>
//         <div className="w-1/2 bg-green-200">
//           50%
//         </div>
//         <div className="w-1/4 bg-blue-200">
//           25%
//         </div>
//       </div>

//       <div className="p-8 bg-gray-400">
//         Footer
//       </div>
//     </div>
//   );
// };

// export default GuessNumber;



