import React from 'react'

const TickTakToe = () => {
  return (
    <div className='bg-green-100 min-h-screen flex justify-center items-center'>
        <div className='max-w-md rounded-md bg-white p-4 flex flex-col gap-4'>
             <h1 className='text-2xl font-bold'>Tic Tac Toe</h1>
             <p className='text-gray-200 '>
                ---
             </p>
        </div>
    </div>
  )
}
export default TickTakToe
