'use client'
import React, { useEffect, useRef, useState } from 'react';

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // cleanup
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRunning]);

  const handleStartTimer = () => setIsRunning(true);
  const handleStopTimer = () => setIsRunning(false);
  const handleResetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="min-h-screen mt-32">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-bold text-2xl mb-5">
          Time: {seconds} sec
        </h1>

        <div className="flex gap-2">
          <button onClick={handleStartTimer}>Start</button>
          <button onClick={handleStopTimer}>Stop</button>
          <button onClick={handleResetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
