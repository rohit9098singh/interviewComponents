"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Services", "Contact"];

const AkshaySidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleItemClick = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the sidebar
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

//   contentRef.current exists (null nahi hai) AND

// event.target sidebar ke andar nahi hai
// → Tab setIsOpen(false) chalega → sidebar close ho jayega.

  return (
    <div className="relative min-h-screen bg-white">
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className={`fixed top-6  z-50 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? "right-[260px]" : "right-6"
        }`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        ref={contentRef}
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-blue-600 to-blue-700 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full" 
        } z-40`}
      >
        <div className="flex flex-col justify-center h-full px-8 space-y-8 text-xl font-bold">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={handleItemClick}
              className="relative group focus:outline-none"
            >
              <span className="group-hover:underline decoration-white transition-all duration-300">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AkshaySidebar;

// "use client"
// import React, { useState } from 'react'

// const AkshaySidebar = () => {
//   const navItems = ["Home", "About", "Services", "Contact"];
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const handleMobileClick = () => {
//     setShowMobileMenu((prev) => !prev);
//   };

//   return (
//     <div className="bg-green-200 h-screen relative">
//       {/* Desktop Navbar */}
//       <div className="hidden h-[64px] w-full p-4 shadow-md bg-orange-500 text-white md:flex items-center gap-5 justify-center">
//         {navItems.map((nav) => (
//           <div key={nav} className="">
//             {nav}
//           </div>
//         ))}
//       </div>

//       {/* Mobile Toggle Button */}
//       <button
//         onClick={handleMobileClick}
//         className="md:hidden bg-green-500 h-12 w-12 text-white absolute right-3 top-3 rounded-lg flex items-center justify-center text-2xl font-bold z-50"
//       >
//         {showMobileMenu ? "x" : "≡"}
//       </button>

//       {/* Mobile Menu (50% width) */}
//       {showMobileMenu && (
//         <div className="fixed right-0 top-0 h-full w-1/2 flex flex-col justify-center items-center md:hidden px-8 space-y-8 text-xl font-bold bg-orange-500 text-white z-40 transition-transform duration-300">
//           {navItems.map((item, index) => (
//             <button
//               key={index}
//               onClick={() => setShowMobileMenu(false)} // click ke baad close
//               className="relative group focus:outline-none"
//             >
//               <span className="group-hover:underline decoration-white transition-all duration-300">
//                 {item}
//               </span>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AkshaySidebar;

