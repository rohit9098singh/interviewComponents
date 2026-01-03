"use client";
import React, { useEffect, useState, useRef } from "react";

const formatTime = (totalSeconds) => {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};


const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimer(0);
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-20 space-y-10">
      <div className="text-4xl font-bold">{formatTime(timer)}</div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleStart}
          className="rounded-md px-5 py-2 bg-green-500 text-white"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="rounded-md px-5 py-2 bg-red-500 text-white"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="rounded-md px-5 py-2 bg-gray-500 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;



// "use client";
// import React, { useEffect, useState, useRef } from "react";

// const formatTime = (totalSeconds) => {
//   const hours24 = Math.floor(totalSeconds / 3600);
//   const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
//   const seconds = String(totalSeconds % 60).padStart(2, "0");

//   // Convert to 12-hour format with AM/PM
//   const period = hours24 % 24 >= 12 ? "PM" : "AM";
//   const hours12 = String(((hours24 % 12) || 12)).padStart(2, "0");

//   return `${hours12}:${minutes}:${seconds} ${period}`;
// };

// const Timer = () => {
//   const [timer, setTimer] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     if (isRunning) {
//       timerRef.current = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => clearInterval(timerRef.current);
//   }, [isRunning]);

//   const handleStart = () => setIsRunning(true);
//   const handleStop = () => setIsRunning(false);
//   const handleReset = () => {
//     setIsRunning(false);
//     setTimer(0);
//   };

//   return (
//     <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-20 space-y-10">
//       <div className="text-4xl font-bold">{formatTime(timer)}</div>

//       <div className="flex items-center gap-4">
//         <button
//           onClick={handleStart}
//           className="rounded-md px-5 py-2 bg-green-500 text-white"
//         >
//           Start
//         </button>
//         <button
//           onClick={handleStop}
//           className="rounded-md px-5 py-2 bg-red-500 text-white"
//         >
//           Stop
//         </button>
//         <button
//           onClick={handleReset}
//           className="rounded-md px-5 py-2 bg-gray-500 text-white"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timer;



