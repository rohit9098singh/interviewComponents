"use client"
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Contact", "Menu"];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <h1 className="text-lg font-bold">Logo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-gray-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-700 px-4 py-2 space-y-2">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block hover:text-gray-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
