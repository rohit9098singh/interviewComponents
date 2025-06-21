"use client"
import React, { useState } from 'react'

const Chips = () => {
    const [input, setInput] = useState("");
    const [chips, setChips] = useState(["hello", "workd"]);
    const handleKeypress = (e) => {   
        if (e.key === "Enter" && input.trim() !=="") {
            setChips((prev)=>[...prev,input])
            setInput("")
        }
    }

    const handleDelete = (index) => {
        const newChips=[...chips]
        newChips.splice(index,1)
        setChips(newChips)
    }

    return (
        <div className='flex flex-col items-center gap-2 mt-10 justify-center '>
            <div>

                <input
                    type="text"
                    className='border border-gray-900 rounded-md w-sm h-10 p-4'
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                    onKeyDown={(e) => handleKeypress(e)}
                />
            </div>
            <div className='flex gap-4 text-center'>
                {
                    chips.map((chip, index) => (
                        <div
                            key={index}
                            className='bg-gray-200 rounded-md min-w-[100px] flex justify-between items-center px-2'
                        >
                            {chip}
                            <button
                                className='text-black-500 py-1 px-2 bg-red-600 rounded-md mt-1 cursor-pointer'
                                onClick={() => handleDelete(index)}
                            >
                                x
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Chips
// "use client"
// import React, { useState } from 'react'

// const Chips = () => {
//     const [input, setInput] = useState("")
//     const [chipsArray, setChipsArray] = useState([]);

//     const handleButtonCLick = () => {
//         const trimmedInputValue = input.trim();
//         if (trimmedInputValue === "") {
//             return;
//         }
//         setChipsArray((prev) => (
//             [...prev, trimmedInputValue]
//         ))
//         setInput("")
//     }

//     const handleDeleteChips = (index) => {
//         const newChips = [...chipsArray]
//         newChips.splice(index, 1)
//         setChipsArray(newChips)
//     }

//     const handleKeyChange = (e) => {
//         const trimmedInputValue = input.trim();
//         if (trimmedInputValue === "") {
//             return;
//         }
//         if (e.key === "Enter") {
//             setChipsArray((prev) => (
//                 [...prev, trimmedInputValue]
//             ))
//             setInput("")
//         }
//     }
//     return (
//         <div className='bg-green-200 min-h-screen flex justify-center items-center '>
//             <div className='max-w-md flex flex-col  gap-4'>
//                 <div className='flex gap-4'>
//                     <input
//                         type="text"
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         className='border border-black p-4 rounded-md w-full'
//                         onKeyDown={(e) => handleKeyChange(e)}
//                     />
//                     <button
//                         onClick={handleButtonCLick}
//                         className='rounded-md px-5 py-2 bg-green-500 text-white '>Add</button>

//                 </div>
//                 <div className='grid gap-4'>
//                     {
//                         chipsArray.map((chips, index) => (
//                             <div key={index} className='relative rounded-md bg-gray-200 p-2 w-[120px]'>
//                                 {chips}
//                                 <button
//                                     onClick={() => handleDeleteChips(index)}
//                                     className='absolute top-1 right-0 p-1 rounded-md bg-red-500 text-white'>
//                                     Delete
//                                 </button>
//                             </div>
//                         ))
//                     }

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Chips

