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
  const [data, setData] = useState<string[]>(users);
  const [input, setInput] = useState("");

  // ✅ Run filter only when input changes
  useEffect(() => {
    const filterUser = users.filter((user) =>
      user.toLowerCase().includes(input.toLowerCase().trim())
    );
    setData(filterUser);
  }, [input]);
  
  return (
    <div className='min-h-screen bg-green-50 flex items-center justify-center flex-col gap-4'>
      <input
        type="text"
        value={input}
        placeholder='enter name'
        className='border border-black p-2'
        onChange={(e) => setInput(e.target.value)}
      />

      {data.map((val, index) => (
        <div key={index}>{val}</div>
      ))}
    </div>
  );
};

export default Today;
