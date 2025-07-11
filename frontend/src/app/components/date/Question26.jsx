"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

export const Question26 = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const [month, setMonth] = useState(7)

    const year = 2025
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay()
    const totalDays = new Date(year, month, 0).getDate()

    return (
        <div className="bg-slate-600 min-h-[60vh] rounded p-6 flex items-center justify-center">
            <div className="bg-white rounded-lg text-black p-6 w-[350px]">
                <div className='flex justify-between items-center'>
                    <ArrowLeft className='h-8 w-8 rounded bg-gray-200 p-1' onClick={() => setMonth(month - 1)} />
                    <h1 className="text-2xl font-bold mb-4 text-center">Calendar - {month}/{year}</h1>
                    <ArrowRight className='h-8 w-8 rounded bg-gray-200 p-1' onClick={() => setMonth(month + 1)} />
                </div>

                <div className="grid grid-cols-7 gap-2 font-semibold text-center mb-2">
                    {days.map((day, index) => (
                        <div key={index}>{day}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                    {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                        <div key={index}></div>
                    ))}

                    {Array.from({ length: totalDays }).map((_, index) => (
                        <div key={index} className="p-2 bg-gray-200 rounded hover:bg-blue-300 cursor-pointer">
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Question26