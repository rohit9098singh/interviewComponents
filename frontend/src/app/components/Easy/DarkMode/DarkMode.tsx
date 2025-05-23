"use client";
import React, { useState } from "react";

const DarkMode = () => {
  const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const backgroundColor = mode === "dark" ? "#212121" : "#ffffff";
  const textColor = mode === "dark" ? "#ffffff" : "#000000";

  return (
    <div
      style={{ backgroundColor, color: textColor }}
      className="min-h-screen flex flex-col justify-center items-center gap-8 transition-colors duration-500"
    >
      <h1 className="font-bold text-2xl">Dark Mode Toggle</h1>
      <div className="flex gap-6 items-center">
        <label className="relative flex w-12 h-6 cursor-pointer">
          {/* checkbox is linked to state */}
          <input
            type="checkbox"
            className="peer hidden"
            checked={mode === "dark"}
            onChange={handleModeChange}
          />
          <div className="bg-gray-300 w-full h-full rounded-full peer-checked:bg-blue-500 transition" />
          <div className="absolute left-1 top-1 bg-white rounded-full h-4 w-4 peer-checked:translate-x-6 transition transform duration-300" />
        </label>
        <p>{mode === "dark" ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
};

export default DarkMode;
