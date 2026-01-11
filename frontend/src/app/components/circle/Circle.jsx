"use client"

import React, { useEffect, useRef } from "react"

const Circle = () => {
  const dotRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const mousemove = (e) => {
      const size = dot.offsetWidth
      const x = e.clientX - size / 2
      const y = e.clientY - size / 2
      dot.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", mousemove)
    return () => window.removeEventListener("mousemove", mousemove)
  }, [])

  return (
    <div
      ref={dotRef}
      className="fixed left-0 top-0 w-6 h-6 rounded-full bg-blue-500 "
      style={{
        transform: "translate(-100px, -100px)",
        transition: "transform 0.03s linear"
      }}
    />
  )
}

export default Circle
