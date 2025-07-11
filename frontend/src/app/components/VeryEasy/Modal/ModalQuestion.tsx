"use client";
import React, { useEffect, useState } from "react";

const ModalQuestion = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setOpenModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div>
      <button
        className="flex items-center justify-center bg-green-500 px-4 py-2 text-white rounded"
        onClick={handleClick}
      >
        Open Modal
      </button>

      {openModal && (
        <div
          onClick={() => setOpenModal(false)}
          className="bg-black/50 fixed inset-0 min-h-screen flex justify-center items-center"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-80 h-[300px] bg-white shadow-md rounded p-4 space-y-4"
          >
            <header className="font-bold text-lg border-b pb-2">
              This is the header of the modal
            </header>
            <div>This is the body of the modal</div>
            <footer className="border-t pt-2 text-right">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalQuestion;
