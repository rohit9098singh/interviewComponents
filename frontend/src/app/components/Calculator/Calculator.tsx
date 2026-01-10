"use client"
import { useState } from "react"

export default function Calculator() {
  const [num1, setNum1] = useState<string>("")
  const [num2, setNum2] = useState<string>("")
  const [operator, setOperator] = useState<string>("")
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate = () => {
    const a = Number(num1)
    const b = Number(num2)

    if (isNaN(a) || isNaN(b)) {
      setResult(null)
      return
    }

    switch (operator) {
      case "+":
        setResult(a + b)
        break
      case "-":
        setResult(a - b)
        break
      case "*":
        setResult(a * b)
        break
      case "/":
        setResult(b !== 0 ? a / b : null)
        break
      default:
        setResult(null)
    }
  }

  return (
    <div className="flex flex-col items-center mt-10 space-y-4">
      <h2 className="text-2xl font-bold">Calculator</h2>

      <div className="flex space-x-2">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          className="border p-2 rounded"
        />

        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>

        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Calculate
      </button>

      {result !== null && (
        <div className="text-lg font-semibold">
          Result: {result}
        </div>
      )}
    </div>
  )
}
