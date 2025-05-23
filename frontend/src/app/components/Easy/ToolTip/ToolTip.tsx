"use client"
import React, { useState } from 'react'

const ToolTip = () => {
    const icons = [
      { emoji: '🏠', label: 'Home' },
      { emoji: '📧', label: 'Email' },
      { emoji: '⚙️', label: 'Settings' }
    ];

     const [hoveredIcon, setHoveredIcon] = useState(null);
  return (
    <div className='min-h-screen flex justify-center items-center'>
       <div className='flex gap-8'>
        {icons.map((icon) => (
          <div
            key={icon.label}
            className='flex flex-col items-center relative'
            onMouseEnter={() => setHoveredIcon(icon.label)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {hoveredIcon === icon.label && (
              <span className='absolute -top-6 bg-black text-white text-sm px-2 py-1 rounded'>
                {icon.label}
              </span>
            )}

            {/* Emoji */}
            <span className='text-3xl cursor-pointer'>{icon.emoji}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolTip
