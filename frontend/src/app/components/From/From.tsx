"use client"
import React, { useState } from 'react';

const Form = () => {
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        const { email, password } = formData;
        const newErrors = {
            email: "",
            password: ""
        };

        if (!email || !email.includes("@")) {
            newErrors.email = "Email is not valid";    
        }

        if (!password || password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        setErrors(newErrors);

        if (!newErrors.email && !newErrors.password) {
            console.log("Form submitted:", formData);
            setTimeout(() => {
                setLoading(false);
                alert("Form submitted successfully!");
                setFormData({ email: "", password: "" });
            }, 1000);
        } else {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen bg-green-200 justify-center items-center flex'>
            <form onSubmit={handleSubmit} className='h-auto flex flex-col gap-4 w-[500px] bg-white shadow-md p-8 rounded-lg'>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter the email'
                    className='border border-gray-400 p-4 rounded-md w-full'
                />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter your password'
                    className='border border-gray-400 p-4 rounded-md w-full'
                />
                {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}

                <button
                    disabled={loading}
                    type='submit'
                    className='w-[150px] bg-blue-500 text-white rounded-md p-2'
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>

            </form>
        </div>
    );
};

export default Form;
