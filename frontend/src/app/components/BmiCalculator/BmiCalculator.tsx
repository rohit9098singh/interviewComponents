"use client"
import React, { ChangeEvent, useState } from "react"

type FormDataProps = {
  height: string
  weight: string
}

type ErrorProps = {
  height?: string
  weight?: string
}

const BmiCalculator = () => {
  const [bmiFormData, setBmiFormData] = useState<FormDataProps>({
    height: "",
    weight: ""
  })

  const [errors, setErrors] = useState<ErrorProps>({})
  const [result, setResult] = useState<number | null>(null)

  // ✅ Validation
  const validate = () => {
    const newErrors: ErrorProps = {}

    if (!bmiFormData.height) {
      newErrors.height = "Height is required"
    }

    if (!bmiFormData.weight) {
      newErrors.weight = "Weight is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ✅ Calculate BMI
  const handleCalculate = () => {
    if (!validate()) return

    const heightInMeters = Number(bmiFormData.height) / 100
    const weight = Number(bmiFormData.weight)

    const bmi = weight / (heightInMeters * heightInMeters)
    setResult(Number(bmi.toFixed(2)))
  }

  // ✅ Reset form
  const handleReset = () => {
    setBmiFormData({ height: "", weight: "" })
    setErrors({})
    setResult(null)
  }

  // ✅ Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setBmiFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="rounded-md max-w-md w-full bg-white p-6 flex flex-col gap-4 shadow-md">
        <h2 className="text-xl font-semibold text-center">BMI Calculator</h2>

        <div className="flex flex-col gap-1">
          <label>Height (cm)</label>
          <input
            type="number"
            name="height"
            value={bmiFormData.height}
            onChange={handleChange}
            className="border border-gray-400 p-3 rounded"
          />
          {errors.height && (
            <span className="text-red-500 text-sm">{errors.height}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={bmiFormData.weight}
            onChange={handleChange}
            className="border border-gray-400 p-3 rounded"
          />
          {errors.weight && (
            <span className="text-red-500 text-sm">{errors.weight}</span>
          )}
        </div>

        <button
          onClick={handleCalculate}
          className="rounded-lg px-5 py-2 bg-green-500 text-white font-medium"
        >
          Calculate
        </button>

        <button
          onClick={handleReset}
          className="rounded-lg px-5 py-2 bg-red-500 text-white font-medium"
        >
          Reset
        </button>

        {result !== null && (
          <p className="text-center font-semibold text-lg">
            Your BMI is: <span className="text-blue-600">{result}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default BmiCalculator
