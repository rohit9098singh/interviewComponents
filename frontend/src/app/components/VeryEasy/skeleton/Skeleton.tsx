"use client";
import React, { useState, useEffect } from "react";

const Loading = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="bg-gray-400 p-3 w-48 h-6 rounded-md animate-pulse"></h1>
      <p className="w-64 bg-gray-200 p-2 h-4 rounded-md animate-pulse"></p>
    </div>
  );
};

const Skeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-green-100 min-h-screen flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl font-bold text-black">John Doe</h1>
          <p className="text-gray-400 font-semibold">
            Full Stack Developer at XYZ Company
          </p>
        </div>
      )}
    </div>
  );
};

export default Skeleton;

// Sir/Ma'am, haan kaam to chalega bina clearInterval ke bhi, lekin agar hum usse clear nahi karte, to interval background me chalta rahega unnecessarily — even after component unmount ho jaye ya requirement khatam ho jaye. Isse memory waste hoti hai, aur isse kehte hain memory leak.

// Isliye best practice hoti hai clearInterval karna jab kaam ho jaye ya component unmount ho raha ho — taki performance sahi rahe aur unnecessary load na aaye browser pe."**
