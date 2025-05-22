"use client"
import React, { useEffect, useState } from 'react';

const Progressbar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const textColor = progress < 5 ? 'text-black' : 'text-white';

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 200);

    return () => clearTimeout(timer); // Cleanup
  }, [progress]);

  return (
    <div className="max-w-7xl m-10 px-2 mx-auto rounded-md bg-gray-200 h-6">
      <div
        className={`bg-green-500 h-full text-sm text-center rounded-md transition-all duration-300 ease-in ${textColor}`}
        style={{ width: `${animatedProgress}%` }}
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Progressbar;
