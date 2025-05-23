"use client"
import React, { useState } from 'react'

const Crousel = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 3;

    const handlePrevPage = () => {
        setCurrentPage((prev) => prev > 1 ? prev - 1 : 1)

    }
    const handleNextClick = () => {
        setCurrentPage((prev) => prev < totalPages ? prev + 1 : totalPages)
    }

    return (
        <div className='bg-green-200 min-h-screen flex justify-center flex-col gap-4 items-center '>
            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                <h1 className='text-2xl font-bold'>Card {currentPage}</h1>
                <p className='mt-3 font-semibold text-gray-700'>Description for Card {currentPage}</p>
            </div>

            <div className='flex gap-5'>
                <button
                    disabled={currentPage === 1}
                    onClick={handlePrevPage}
                    className={`px-4 py-1 rounded-md ${currentPage === 1
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    Previous
                </button>

                <button
                    disabled={currentPage === totalPages}
                    onClick={handleNextClick}
                    className={`px-4 py-1 rounded-md ${currentPage === totalPages
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    Next
                </button>

            </div>
        </div>
    )
}

export default Crousel
