"use client"
import React, { useState } from 'react'

const DiceRoller = () => {
    const [diceValue,setDiceValue]=useState<number |null>(null);
    const handleGenerateRandomNumber=()=>{
        const randomVlaue=Math.floor(Math.random()*6) +1;
        setDiceValue(randomVlaue)
    }
  return (
    <div className='min-h-screen flex flex-col gap-6 justify-center items-center'>
         <h1 className='Text-2xl font-bold'>Dice Roller</h1>
         <button
           onClick={handleGenerateRandomNumber}
         className='px-8 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-md '>
              Roll Dice
         </button>
        {
            diceValue ? (<p>🎲 {diceValue}</p>) :(<p>
            Click to Roll !
        </p>)
        }
      
    </div>
  )
}

export default DiceRoller
