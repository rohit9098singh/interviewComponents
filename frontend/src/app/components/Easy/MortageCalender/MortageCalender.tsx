"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MortgageCalculator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const onSubmit = (data) => {
    const amount = parseFloat(data.amount);
    const interest = parseFloat(data.interest);
    const years = parseFloat(data.years);

    const monthlyInterest = interest / 100 / 12;
    const numPayments = years * 12;

    const payment =
      (amount * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -numPayments)); 
     // emi=p.r/1-(1+r)^-n
    setMonthlyPayment(Number(payment.toFixed(2)));
     reset();
  };
 
  return (
    <div className="min-h-screen justify-center flex items-center">
      <div className="flex flex-col gap-4">
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h1 className="text-2xl font-bold">Mortgage Calculator</h1>

          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <label className="w-48" htmlFor="amount">
                Loan Amount (INR):
              </label>
              <input
                type="number"
                id="amount"
                {...register("amount", {
                  required: "Amount is required",
                  min: { value: 1, message: "Amount must be positive" },
                })}
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            {errors.amount && (
              <p className="text-red-500 ml-48">{errors.amount.message}</p>
            )}

            <div className="flex items-center">
              <label className="w-48" htmlFor="interest">
                Annual Interest Rate (%):
              </label>
              <input
                type="number"
                id="interest"
                {...register("interest", {
                  required: "Interest rate is required",
                  min: { value: 0.01, message: "Interest must be positive" },
                })}
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            {errors.interest && (
              <p className="text-red-500 ml-48">{errors.interest.message}</p>
            )}

            <div className="flex items-center">
              <label className="w-48" htmlFor="years">
                Loan Term (Years):
              </label>
              <input
                type="number"
                id="years"
                {...register("years", {
                  required: "Loan term is required",
                  min: { value: 1, message: "Years must be positive" },
                })}
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            {errors.years && (
              <p className="text-red-500 ml-48">{errors.years.message}</p>
            )}

            <button
              type="submit"
              className="bg-gray-300 border px-6 py-1 hover:bg-gray-400 duration-300"
            >
              Calculate
            </button>

            {monthlyPayment !== null && (
              <p className="text-green-600 font-semibold">
                Monthly Payment: ₹{monthlyPayment}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MortgageCalculator;
