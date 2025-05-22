"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false); // 🔁 Step 1: Track submission

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);  // 🔁 Step 2: Show thank-you message
    reset();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 max-w-3xl w-full px-4">
        {isSubmitted ? (
          // 🔁 Step 3: Thank you message
          <div className="text-center mt-20 text-xl font-semibold text-green-600">
            Thank you for your message!
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Contact Form</h1>

            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-2 rounded"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-2 rounded"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                id="message"
                className="border border-gray-300 p-2 rounded"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
