"use client"
import React, { useState } from 'react'

const BmiCalculator = () => {
    const [heightValue, setHeightValue] = useState("");
    const [weightValue, setWeightValue] = useState("");
    const [bmi, setBmi] = useState(null);

    const handleHeightChange = (e) => {
        setHeightValue(e.target.value);
    };

    const handleWeightChange = (e) => {
        setWeightValue(e.target.value);
    };

    const handleCalCulateBmi = () => {
        if (!heightValue || !weightValue) return;

        const heightInMeters = parseFloat(heightValue) / 100;
        const weightInKg = parseFloat(weightValue);
        const bmiValue = weightInKg / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
    };

    const handleReset = () => {
        setHeightValue("");
        setWeightValue("");
        setBmi(null);
    };

    return (
        <div className="min-h-screen bg-green-100 flex justify-center items-center">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-2xl font-bold">BMI Calculator</h1>
                <div className="flex flex-col gap-2">
                    <input
                        value={heightValue}
                        onChange={handleHeightChange}
                        type="number"
                        className="border border-gray-200 p-1 w-52"
                        placeholder="Height (cm)"
                    />
                    <input
                        value={weightValue}
                        onChange={handleWeightChange}
                        type="number"
                        className="border border-gray-200 p-1 w-52"
                        placeholder="Weight (kg)"
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={handleCalCulateBmi}
                            className="w-3/4 border cursor-pointer bg-gray-200 rounded-md px-4 py-1">
                            Calculate BMI
                        </button>
                        <button
                            onClick={handleReset}
                            className="border cursor-pointer bg-gray-200 rounded-md px-4 py-1">
                            Reset
                        </button>
                    </div>
                    {bmi && <p className="mt-2 font-semibold">Your BMI is: {bmi}</p>}
                </div>
            </div>
        </div>
    );
};

export default BmiCalculator;


// BMI= Weight(kg) /(Height (m)) ^2


 


