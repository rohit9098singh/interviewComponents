"use client";
import { useEffect, useCallback } from "react";

const ThrottleResize = () => {
  let flag = true;

  const expensiveFunction = () => {
    console.log(
      `Window resized to: ${window.innerWidth} x ${window.innerHeight} at`,
      new Date().toLocaleTimeString()
    );
  };

  const throttledResize = useCallback(() => {
    if (!flag) return;

    expensiveFunction();
    flag = false;

    setTimeout(() => {
      flag = true;
    }, 1000); // throttle delay
  }, []);

  useEffect(() => {
    window.addEventListener("resize", throttledResize);

    return () => {
      window.removeEventListener("resize", throttledResize);
    };
  }, [throttledResize]);

  return <div>Resize the window and check console</div>;
};

export default ThrottleResize;
