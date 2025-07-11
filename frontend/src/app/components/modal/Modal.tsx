import { useState, useEffect } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setShowModal(false)} // outside click
        >
          <div
            className="bg-white p-6 rounded shadow-md w-80"
            onClick={(e) => e.stopPropagation()} // prevent outside close
          >
            {/* Title */}
            <h2 className="text-xl font-bold mb-2">Modal Title</h2>

            {/* Content */}
            <p className="mb-4">This is the modal content.</p>

            {/* Footer */}
            <div className="text-right">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
