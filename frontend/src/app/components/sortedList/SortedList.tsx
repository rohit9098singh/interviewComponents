"use client"
import React, { useState } from 'react'

const SortedList = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputMessage, setInputMessage] = useState([]);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }


    const handleAddInputData = () => {
        if (inputValue.trim() !== "") {
            setInputMessage(prev => [...prev, inputValue.trim()]);
            setInputValue("");
        }
    };
    const handleSortAsc = () => {
        setInputMessage([...inputMessage].sort());
    };

    const handleSortDesc = () => {
        setInputMessage([...inputMessage].sort().reverse());
    };
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='max-w-5xl'>
                <h1 className='text-2xl font-bold text-center'>Sorted List</h1>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <input
                            value={inputValue}
                            onChange={(e) => handleInputChange(e)}
                            type="text" className='w-full  border border-gray-200 p-2' />
                        <button
                            onClick={handleAddInputData}
                            className='mx-auto bg-gray-400 px-4 py-1 rounded-lg font-bold'>Add Items</button>
                    </div>
                    <div className='flex justify-between gap-4'>
                        <button onClick={handleSortAsc} className='bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-lg font-bold'>Sort Ascending</button>
                        <button onClick={handleSortDesc} className='bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-lg font-bold'>Sort Descending</button>
                    </div>
                     <ul className='mt-4 list-disc list-inside'>
                {inputMessage.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
                </div>
            </div>
        </div>
    )
}

export default SortedList
