"use client";
import React, { useEffect, useRef, useState } from "react";

const UserRef = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close modal if clicked outside of modal content
      if (modalRef.current && modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Modal
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-6 w-80 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">This is a Modal</h2>
            <p className="mb-4 text-gray-700">You can put any content here.</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRef;
