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
