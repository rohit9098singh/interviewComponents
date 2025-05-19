"use client"
import React, { useState } from 'react'

const WithoutUseForm = () => {
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData=new FormData(e.currentTarget);
    const amount = Number(formData.get("amount"));
    const interest = Number(formData.get("interest"));
    const years = Number(formData.get("years"));

    if(amount <= 0 || interest <= 0 || years <= 0){
        setError("Please enter valid positive values.");
      setMonthlyPayment(null);
      return;
    }
    setError("");
    const montlyIntrest=interest/100/12;
    const numPayments=years*12;

    const payment=(amount*montlyIntrest)/(1-Math.pow(1+montlyIntrest,-numPayments));
    setMonthlyPayment(Number(payment.toFixed(2)))
  }
  return (
   <div className="min-h-screen justify-center flex items-center">
      <div className="flex flex-col gap-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold">Mortgage Calculator</h1>

          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <label className="w-48">Loan Amount (INR):</label>
              <input
                type="number"
                name="amount"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="flex items-center">
              <label className="w-48">Annual Interest Rate (%):</label>
              <input
                type="number"
                name="interest"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="flex items-center">
              <label className="w-48">Loan Term (Years):</label>
              <input
                type="number"
                name="years"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-300 border px-6 py-1 hover:bg-gray-400 duration-300"
            >
              Calculate
            </button>

            {error && <p className="text-red-500">{error}</p>}

            {monthlyPayment !== null && (
              <p className="text-green-600 font-semibold">
                Monthly Payment: ₹{monthlyPayment}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default WithoutUseForm
