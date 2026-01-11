"use client"
import React, { useState } from 'react';

const PasswordStrength = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const [showPassword,setShowPassword]=useState(false)

    const toggleVisibility=()=>{
        setShowPassword((prev)=>!prev)
    }

    const checkStrength = (pwd) => {
        let score = 0;

        if (pwd.length >= 8) score++;
        if (/[A-Z]/.test(pwd)) score++;
        if (/[a-z]/.test(pwd)) score++;
        if (/[0-9]/.test(pwd)) score++;
        if (/[^A-Za-z0-9]/.test(pwd)) score++;
        if (score <= 2) return 'Weak';
        if (score === 3 || score === 4) return 'Moderate';
        if (score === 5) return 'Strong';
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setStrength(checkStrength(value));
    };

    return (
        <div className="p-4 max-w-md mx-auto ">
            <h2 className="text-xl font-bold mb-2">Password Strength Checker</h2>
            <div className='relative '>
                <input
                    type={showPassword?"password":"text"}
                    value={password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter password"
                />
                <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleVisibility}
                >
                    {showPassword ? '🙈' : '👁️'}
                </span>
            </div>
            {password && (
                <p className={`mt-2 font-semibold ${strength === "Weak" ? "text-red-500" : strength === "Moderate" ? "text-yellow-500" : "text-green-500"
                    }`}>
                    Strength: <strong>{strength}</strong>
                </p>
            )}

        </div>
    );
};

export default PasswordStrength;
