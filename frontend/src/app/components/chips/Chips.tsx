"use client"

import React, { useState } from "react"

type ChipsProps = {
  id: number
  name: string
}

const Chips = () => {
  const [inputValue, setInputValue] = useState("")
  const [chips, setChips] = useState<ChipsProps[]>([
    { id: 1, name: "hello" }
  ])

  const handleAdd = () => {
    if (!inputValue.trim()) return

    const preparedData: ChipsProps = {
      id: Date.now(),
      name: inputValue
    }

    setChips(prev => [...prev, preparedData])
    setInputValue("")
  }

  const handleDelete = (id: number) => {
    setChips(prev => prev.filter(chip => chip.id !== id))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex gap-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="rounded-md border border-gray-500 p-2"
        />
        <button
          onClick={handleAdd}
          className="bg-red-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="flex gap-4 flex-wrap">
        {chips.map((chip) => (
          <div
            key={chip.id}
            className="relative px-3 py-1 rounded-md bg-gray-200"
          >
            {chip.name}
            <button
              onClick={() => handleDelete(chip.id)}
              className="ml-2 text-red-600 font-bold"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chips
