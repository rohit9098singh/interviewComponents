"use client"
import React, { useEffect, useRef } from "react";

export default function MouseFollower() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    function handleMove(e) {
      const size = dot.offsetWidth;
      const x = e.clientX - size / 2;
      const y = e.clientY - size / 2;
      dot.style.transform = `translate(${x}px, ${y}px)`;
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <div
        ref={dotRef}
        className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 shadow-lg"
        style={{ transform: "translate(-100px, -100px)", transition: "transform 0.03s linear" }}
      />
    </div>
  );
}
