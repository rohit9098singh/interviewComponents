"use client";
import React, { useState } from "react";

const DarkMode = () => {
  const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center gap-8 transition-colors duration-500 
      ${mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <h1 className="font-bold text-2xl">Dark Mode Toggle</h1>

      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          checked={mode === "dark"}
          onChange={handleModeChange}
        />
        <p>{mode === "dark" ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
};

export default DarkMode;
