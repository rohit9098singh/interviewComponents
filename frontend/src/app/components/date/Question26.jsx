// "use client";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import React, { useState } from "react";

// export const Question26 = () => {
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const [month, setMonth] = useState(7); // 1-based: July
//   const [year, setYear] = useState(2025);

//   const handlePrev = () => {
//     if (month === 1) {
//       setMonth(12);
//       setYear((prev) => prev - 1);
//     } else {
//       setMonth((prev) => prev - 1);
//     }
//   };

//   const handleNext = () => {
//     if (month === 12) {
//       setMonth(1);
//       setYear((prev) => prev + 1);
//     } else {
//       setMonth((prev) => prev + 1);
//     }
//   };

//   const firstDayOfMonth = new Date(year, month - 1, 1).getDay(); // 1st is year 2nd is month 3rd is firstDay of month
//   const totalDays = new Date(year, month, 0).getDate();


//   return (
//     <div className="bg-slate-600 min-h-[60vh] rounded p-6 flex items-center justify-center">
//       <div className="bg-white rounded-lg text-black p-6 w-[350px]">
//         <div className="flex justify-between items-center">
//           <ArrowLeft
//             className="h-8 w-8 rounded bg-gray-200 p-1"
//             onClick={handlePrev}
//           />
//           <h1 className="text-2xl font-bold mb-4 text-center">
//             Calendar - {month}/{year}
//           </h1>
//           <ArrowRight
//             className="h-8 w-8 rounded bg-gray-200 p-1"
//             onClick={handleNext}
//           />
//         </div>

//         <div className="grid grid-cols-7 gap-2 font-semibold text-center mb-2">
//           {days.map((day, index) => (
//             <div key={index}>{day}</div>
//           ))}
//         </div>

//         <div className="grid grid-cols-7 gap-2 text-center">
//           {Array.from({ length: firstDayOfMonth }).map((_, index) => (
//             <div key={index}></div>
//           ))}

//           {Array.from({ length: totalDays }).map((_, index) => (
//             <div
//               key={index}
//               className="p-2 bg-gray-200 rounded hover:bg-blue-300 cursor-pointer"
//             >
//               {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Question26;



"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

const Question26 = () => {
  const day = ["sun", "tue", "wed", "thur", "fri", "sat", "sun"]
  const [month, setMonth] = useState(1)
  const [year, setYear] = useState(2026)

  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const totalDays = new Date(year, month - 1, 0).getDate()

  const handleClickLeft = () => {
    if (month === 1) {
      setMonth(12)
      setYear((prev) => prev - 1)
    }
    else {
      setMonth((prev) => prev - 1);
    }
  }

  const handleClickRight = () => {
    if (month === 12) {
      setMonth(1)
      setYear((prev) => prev + 1)
    }
    else {
      setMonth((prev) => prev + 1)
    }
  }

  return (
    <div className='min-h-screen bg-green-50 '>
      <div className='max-w-md rounded-md p-6 ' >
        <div className='flex justify-between items-center'>
          <ArrowLeft onClick={handleClickLeft} />
          <h1 className="text-2xl font-bold mb-4 text-center">
            Calendar - {month}/{year}
          </h1>
          <ArrowRight onClick={handleClickRight} />
        </div>
        <div className='grid grid-cols-7 gap-4 bg-gray-300 text-black'>
          {day.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>
        <div className='grid grid-cols-7 gap-4 bg-gray-300 text-balck p-1'>
          {
            Array.from({length:firstDayOfMonth}).map((_,index)=>(
              <div key={index}></div>
            ))
          }
          {
            Array.from({length:totalDays}).map((_,index)=>(
                <p key={index} className='bg-gray-300 text-black p-1'>
                    {index+1}
                </p>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Question26
