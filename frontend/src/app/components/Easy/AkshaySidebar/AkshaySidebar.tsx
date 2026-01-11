"use client";
// import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Services", "Contact"];

// const AkshaySidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const contentRef = useRef(null);

//   const handleToggle = () => setIsOpen(!isOpen);
//   const handleItemClick = () => setIsOpen(false);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       // Check if click is outside the sidebar
//       if (contentRef.current && !contentRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

// //   contentRef.current exists (null nahi hai) AND

// // event.target sidebar ke andar nahi hai
// // → Tab setIsOpen(false) chalega → sidebar close ho jayega.

//   return (
//     <div className="relative min-h-screen bg-white">
//       {/* Toggle Button */}
//       <button
//         onClick={handleToggle}
//         className={`fixed top-6  z-50 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
//           isOpen ? "right-[260px]" : "right-6"
//         }`}
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <div
//         ref={contentRef}
//         className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-blue-600 to-blue-700 text-white transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full" 
//         } z-40`}
//       >
//         <div className="flex flex-col justify-center h-full px-8 space-y-8 text-xl font-bold">
//           {navItems.map((item, index) => (
//             <button
//               key={index}
//               onClick={handleItemClick}
//               className="relative group focus:outline-none"
//             >
//               <span className="group-hover:underline decoration-white transition-all duration-300">
//                 {item}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AkshaySidebar;
import React, { useState } from 'react'

const AkshaySidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  return (
    <div className="min-h-screen bg-green-50 relative">
      <button onClick={()=>setIsSideBarOpen((prev)=>!prev)} className={`absolute cursor-pointer rounded-full bg-blue-500 text-white p-2 transition-transform duration-300 top-6  ${isSideBarOpen ? "right-66" : "right-6"}`}>
        {isSideBarOpen ? <X /> :  <Menu />  }
      </button>
      <div className={`absolute right-0 top-0 h-screen transition-all duration-300 ease-in-out bg-blue-500 w-64 text-white ${isSideBarOpen ? "translate-x-0" : "translate-x-full"} p-6`}>
        <div className="flex flex-col gap-3">
          {navItems.map((nav, index) => (
            <div key={index} className="font-bold text-lg hover:underline">
              {nav}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AkshaySidebar
