"use client"
import React, { useState } from 'react'
import { items } from '../accordian/Accordian'
import { ChevronDown } from 'lucide-react'

type accordianProps = {
  title: string,
  content: string
}

const Check = () => {
    const [data, setData] = useState<accordianProps[]>(items)
    const [isAccordianOpen, setIsAccordianOpen] = useState<number | null>(0)

    const handleCLick = (index: number) => {
        setIsAccordianOpen((prev) => prev === index ? null : index)
    }
    return (
        <div className='flex justify-center items-center bg-green-100 min-h-screen'>
            <div className='flex flex-col gap-4'>
                {
                    data.map((item, index) => (
                        <div key={index} className='border-b-2 w-full p-2'>
                            <div onClick={() => handleCLick(index)} className=' flex justify-between items-center cursor-pointer'>
                                <h2 className='font-bold text-md'>{item.title}</h2>
                                <ChevronDown
                                    className={`transition-transform duration-300 ${isAccordianOpen === index ? "rotate-180" : "rotate-0"
                                        }`}
                                    size={20}
                                />
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isAccordianOpen === index ? "max-h-40" : "max-h-0"}`}>
                                <p className='mt-2 text-gray-700'>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Check



