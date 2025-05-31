// Gautam Kumar
// 22:02
// Build a React component that includes:

// A search input field

// A list of user names (hardcoded array)

// As the user types, filter the list in real-time

// Search should be case-insensitive

// If the input is empty, show all names

// ✅ Requirements:
// Use functional components

// Use useState and/or useEffect

// Bonus: Highlight the matching part of the name in bold

"use client"
import React, { useEffect, useState } from 'react'
const users = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Evelyn",
  "Frank",
  "Grace",
  "Hannah"
];

const Today = () => {

    const [data,setData]=useState<string[]>(users)

    const fetchData=(input:string)=>{
      const filterUser=users.filter((user)=>user.toLowerCase().includes(input.toLowerCase().trim()))
      setData(filterUser);
    }

    return (
        <div className='min-h-screen bg-green-50 flex items-center justify-center flex-col gap-4'>
            <input
                type="text"
                placeholder='enter name'
                className='border border-black p-2 '
                onChange={(e)=>fetchData(e.target.value)}
            />
            {
                data.map((val,index)=>(
                    <div key={index} >
                         {val}
                    </div>
                ))
            }
            
        </div>
    )
}

export default Today
