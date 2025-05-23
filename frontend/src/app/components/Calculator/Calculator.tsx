import React from 'react'

const Calculator = () => {
    return (
        <div className='bg-green-200 min-h-screen flex justify-center items-center'>
            <div className='max-w-md w-full bg-white rounded-xl shadow-md p-6 border border-green-300'>
                <h1 className='text-center text-2xl font-bold text-green-700 bg-green-100 py-2 px-4 rounded-md mb-6'>Simple Calculator</h1>
                <div className='flex flex-col gap-6'>
                    <input
                        type='number'
                        className='border-2 border-green-400 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                        placeholder='Enter a number'
                    />
                    <div className='flex gap-4'>
                        <button className='bg-black text-white p-3 rounded-lg'> <span className='h-18 w-18'>🗑️</span></button>
                        <button className='p-3 rounded-lg bg-green-100 text-black' ></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Calculator
