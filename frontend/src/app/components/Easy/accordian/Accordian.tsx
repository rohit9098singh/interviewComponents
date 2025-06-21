"use client"
import React, { useState } from 'react';

const items = [
    {
        title: "JavaScript Basics",
        content: "Learn variables, functions, and loops in JavaScript."
    },
    {
        title: "React.js Overview",
        content: "Understand components, state, and props in React."
    },
    {
        title: "Node.js",
        content: "Basics of server-side development with Node.js."
    },
    {
        title: "Full-Stack Development",
        content: "Build full-stack apps with React and Node.js."
    },
];

const Accordian = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const handletitleCLick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return items.length === 0 ? <p className='min-h-screen flex items-center justify-center'>no items available</p> : (
        <div className='min-h-screen max-w-5xl mx-auto p-4'>
            <div className='bg-gray-200 flex flex-col gap-4 p-4 rounded-md'>
                {items.map((item, index) => (
                    <div key={index} className='rounded-md border bg-white shadow p-2'>
                        <button onClick={() => handletitleCLick(index)} className='font-semibold text-left bg-gray-300 p-4 rounded-t-md w-full text-lg flex justify-between'>
                            {item.title}
                            {
                                openIndex === index ? <p>⬆️</p> :
                                    <p>⬇️</p>
                            }
                        </button>
                        {
                            openIndex === index && (

                                <div className='bg-gray-100 p-4 rounded-b-md'>
                                    <p className='text-gray-700'>{item.content}</p>
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordian;
